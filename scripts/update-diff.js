import { execSync } from "child_process";
import { readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, relative } from "path";

const POSTS_DIR = join(process.cwd(), "src/content/posts");
const OUTPUT_DIR = join(process.cwd(), "src/json");
const OUTPUT_FILE = join(OUTPUT_DIR, "git-history.json");

function getGitHistory(filePath) {
  try {
    const relativePath = relative(process.cwd(), filePath);
    const log = execSync(
      `git log --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso "${relativePath}"`,
      { encoding: "utf-8" }
    );

    if (!log.trim()) {
      return [];
    }

    return log.trim().split("\n").map((line) => {
      const [hash, authorName, authorEmail, date, subject] = line.split("|");
      return {
        hash,
        author: authorName,
        email: authorEmail,
        date: new Date(date).toISOString(),
        message: subject,
      };
    });
  } catch (error) {
    return [];
  }
}

function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function main() {
  console.log("Generating git history...");

  // 确保输出目录存在
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 获取所有文章文件
  const posts = getAllFiles(POSTS_DIR);
  console.log(`Found ${posts.length} post files`);

  // 生成每个文件的 Git 历史
  const gitHistory = {};

  posts.forEach((filePath) => {
    const relativePath = relative(POSTS_DIR, filePath);
    const history = getGitHistory(filePath);

    if (history.length > 0) {
      gitHistory[relativePath] = history;
    }

    process.stdout.write(`\rProcessed ${Object.keys(gitHistory).length}/${posts.length} files...`);
  });

  console.log("\nGenerating git history...");

  // 保存到 JSON 文件
  writeFileSync(OUTPUT_FILE, JSON.stringify(gitHistory, null, 2), "utf-8");

  console.log(`Git history generated for ${Object.keys(gitHistory).length} files.`);
  console.log(`Output saved to ${OUTPUT_FILE}`);
}

main();