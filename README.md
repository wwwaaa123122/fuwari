# 🍥Fuwari  
![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
[![DeepWiki](https://img.shields.io/badge/DeepWiki-saicaca%2Ffuwari-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/saicaca/fuwari)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_shield&issueType=license)

A static blog template built with [Astro](https://astro.build).

[**🖥️ Live Demo (Vercel)**](https://fuwari.vercel.app)

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

🌏 README in
[**中文**](https://github.com/saicaca/fuwari/blob/main/docs/README.zh-CN.md) /
[**日本語**](https://github.com/saicaca/fuwari/blob/main/docs/README.ja.md) /
[**한국어**](https://github.com/saicaca/fuwari/blob/main/docs/README.ko.md) /
[**Español**](https://github.com/saicaca/fuwari/blob/main/docs/README.es.md) /
[**ไทย**](https://github.com/saicaca/fuwari/blob/main/docs/README.th.md) /
[**Tiếng Việt**](https://github.com/saicaca/fuwari/blob/main/docs/README.vi.md) (Provided by the community and may not always be up-to-date)

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Search functionality with [Pagefind](https://pagefind.app/)
- [x] [Markdown extended features](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] Table of contents
- [x] RSS feed

## 🚀 Getting Started

1. Create your blog repository:
    - [Generate a new repository](https://github.com/saicaca/fuwari/generate) from this template or fork this repository.
    - Or run one of the following commands:
       ```sh
    # Fuwari — 可定制的 Astro 静态博客模板

    一个基于 Astro + Tailwind 的轻量、可配置的个人博客模板，集成了搜索、暗/亮主题、目录与扩展的 Markdown 支持，适合用来搭建技术或个人博客。

    **演示站点**：https://fuwari.vercel.app

    ## **特性**

    - 基于 Astro（静态站点生成）与 Tailwind CSS
    - 响应式设计、暗/亮模式切换
    - 页面过渡与流畅的交互动画
    - 本地全文搜索（Pagefind）支持
    - 扩展的 Markdown 功能（提示框、GitHub 仓库卡片、增强代码块）
    - 自动生成目录、RSS 输出

    ## **快速开始**

    1. 克隆仓库到本地：

    ```bash
    git clone https://github.com/saicaca/fuwari.git
    cd fuwari
    ```

    2. 安装依赖（推荐使用 `pnpm`）：

    ```bash
    npm install -g pnpm
    pnpm install
    ```

    3. 本地开发：

    ```bash
    pnpm dev
    # 在浏览器打开 http://localhost:4321
    ```

    4. 构建与预览：

    ```bash
    pnpm build
    pnpm preview
    ```

    ## **配置**

    主要配置文件位于 [src/config.ts](src/config.ts). 修改该文件可设置站点标题、语言、社交链接、主题色等。

    文章内容存放在 [src/content/posts/](src/content/posts/)。使用 `pnpm new-post <文件名>` 可以快速创建文章模板。

    文章 Frontmatter 示例：

    ```yaml
    ---
    title: 我的第一篇文章
    published: 2024-01-01
    description: 文章摘要
    image: ./cover.jpg
    tags: [示例]
    category: 技术
    draft: false
    lang: zh
    ---
    ```

    ## **部署**

    适配 Vercel、Netlify、Cloudflare Pages 等静态站点平台。部署前请根据目标平台调整 `astro.config.mjs` 与构建设置。

    ## **项目结构（简要）**

    - `src/`：站点源码（页面、组件、内容、样式）
    - `public/`：静态资源
    - `package.json`：脚本与依赖

    具体实现细节和插件位于 `src/plugins/`、`src/components/` 等目录。

    ## **贡献与问题反馈**

    欢迎提交 Issue 或 Pull Request。贡献指南见 [CONTRIBUTING.md](CONTRIBUTING.md)。

    ## **许可证**

    本项目采用 MIT 许可证。详见 LICENSE 文件。

    ---

    如果你希望我把 README 翻译为其它语言、补充更多部署示例或增加快速配置步骤，我可以继续完善。
