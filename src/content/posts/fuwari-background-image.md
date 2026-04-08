---
title: Fuwari 主题背景图功能教程
published: 2026-03-29
description: '为 Fuwari 主题添加背景图、高斯模糊和半透明效果的完整配置教程'
image: '/homeground.webg'
tags: [fuwari]
category: 'tech'
draft: false
lang: 'zh_CN'
---

本教程将介绍如何为 Fuwari 主题添加背景图功能，包括高斯模糊效果和用户可调节的模糊程度。

## 功能特性

- ✨ 全屏背景图显示
- 🎨 高斯模糊效果
- 🎚️ 用户可调节模糊程度（0-50px）
- 🧊 半透明卡片效果
- 💾 设置自动保存到本地存储

## 配置步骤

### 1. 配置背景图

打开 `src/config.ts` 文件，找到 `siteConfig` 对象，添加或修改 `background` 配置：

```typescript
export const siteConfig: SiteConfig = {
  // ... 其他配置
  
  background: {
    enable: true,              // 是否启用背景图
    src: "/homeground.webg",   // 背景图片路径
    blur: 10,                  // 默认模糊程度（像素）
  },
  
  // ... 其他配置
};
```

**参数说明：**
- `enable`: 布尔值，控制是否显示背景图
- `src`: 图片路径，以 `/` 开头表示相对于 `/public` 目录，否则相对于 `/src` 目录
- `blur`: 数字，默认模糊程度，范围建议 0-50

### 2. 添加背景图片

将你的背景图片放到 `/public` 目录下（如果路径以 `/` 开头）或 `/src` 目录下。建议使用高分辨率的图片以获得最佳效果。

**推荐图片规格：**
- 分辨率：至少 1920x1080
- 格式：WebP（推荐）、JPG、PNG
- 大小：建议小于 2MB

### 3. 自定义模糊度

用户可以在网页上通过导航栏的模糊图标调节背景模糊度：

1. 点击导航栏右侧的模糊图标
2. 使用滑块调节模糊程度（0-50px）
3. 设置会自动保存，刷新页面后保持

## 样式自定义

如果需要调整半透明效果，可以修改 `src/styles/variables.styl` 文件：

```stylus
define({
  // 卡片背景透明度（85% 不透明）
  --card-bg-transparent: oklch(1 0 0 / 0.85) oklch(0.23 0.015 var(--hue) / 0.85)
  
  // 导航栏背景透明度（80% 不透明）
  --navbar-bg: oklch(1 0 0 / 0.8) oklch(0.23 0.015 var(--hue) / 0.8)
})
```

修改 `0.85` 和 `0.8` 可以调整透明度（0-1 之间，越小越透明）。

## 禁用背景图

如果不想要背景图效果，只需在配置中设置 `enable: false`：

```typescript
background: {
  enable: false,
  src: "/homeground.webg",
  blur: 10,
},
```

## 效果展示

启用背景图后，整个网站将拥有：
- 固定在底层的全屏背景图
- 可调节的高斯模糊效果
- 半透明的卡片和导航栏
- 保持良好的文字可读性

## 代码实现

如果你想从零开始实现这个功能，或者了解具体的技术细节，请按照以下步骤操作：

### 步骤 1: 定义配置类型

首先在 `src/types/config.ts` 中添加背景图配置的类型定义：

```typescript
export type SiteConfig = {
  // ... 其他配置

  background: {
    enable: boolean;
    src: string;
    blur?: number;
  };

  // ... 其他配置
};
```

### 步骤 2: 添加配置项

在 `src/config.ts` 中添加背景图配置：

```typescript
export const siteConfig: SiteConfig = {
  // ... 其他配置

  background: {
    enable: true,
    src: "/homeground.webg",
    blur: 10,
  },

  // ... 其他配置
};
```

### 步骤 3: 实现设置存储和读取

在 `src/utils/setting-utils.ts` 中添加模糊度的存储和读取函数：

```typescript
// 获取默认模糊度
export function getDefaultBlur(): number {
  const fallback = "10";
  const configCarrier = document.getElementById("config-carrier");
  return Number.parseInt(configCarrier?.dataset.blur || fallback);
}

// 获取存储的模糊度
export function getBlur(): number {
  const stored = localStorage.getItem("blur");
  return stored ? Number.parseInt(stored) : getDefaultBlur();
}

// 设置模糊度
export function setBlur(blur: number): void {
  localStorage.setItem("blur", String(blur));
  const r = document.querySelector(":root") as HTMLElement;
  if (!r) {
    return;
  }
  r.style.setProperty("--bg-blur", String(blur) + "px");
}
```

### 步骤 4: 创建模糊设置组件

创建 `src/components/widget/BlurSettings.svelte` 文件：

```svelte
<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getDefaultBlur, getBlur, setBlur } from "@utils/setting-utils";

let blur = getBlur();
const defaultBlur = getDefaultBlur();

function resetBlur() {
  blur = getDefaultBlur();
}

$: if (blur || blur === 0) {
  setBlur(blur);
}
</script>

<div id="blur-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <div class="flex flex-row gap-2 mb-3 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            背景模糊
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md active:scale-90"
                    class:opacity-0={blur === defaultBlur} class:pointer-events-none={blur === defaultBlur} on:click={resetBlur}>
                <div class="text-[var(--btn-content)]">
                    <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
                </div>
            </button>
        </div>
        <div class="flex gap-1">
            <div id="blurValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center
            font-bold text-sm items-center text-[var(--btn-content)]">
                {blur}
            </div>
        </div>
    </div>
    <div class="w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none">
        <input aria-label="Background Blur" type="range" min="0" max="50" bind:value={blur}
               class="slider" id="blurSlider" step="1" style="width: 100%">
    </div>
</div>
```

### 步骤 5: 更新 ConfigCarrier 组件

修改 `src/components/ConfigCarrier.astro` 以传递模糊度配置：

```astro
---
import { siteConfig } from "../config";

interface Props {
  blur?: number;
}

const { blur = siteConfig.background.blur || 10 } = Astro.props;
---

<div id="config-carrier" data-hue={siteConfig.themeColor.hue} data-blur={blur}>
</div>
```

### 步骤 6: 在 Layout 中添加背景图

在 `src/layouts/Layout.astro` 中添加背景图元素和初始化脚本：

```astro
<body>
  <ConfigCarrier blur={siteConfig.background.blur || 10}></ConfigCarrier>
  {siteConfig.background.enable && (
    <div id="background-wrapper" class="fixed inset-0 -z-10 overflow-hidden">
      <img
        id="background-image"
        src={url(siteConfig.background.src)}
        alt="Background image"
        class="absolute inset-0 w-full h-full object-cover"
        style={`filter: blur(var(--bg-blur, 10px))`}
      />
    </div>
  )}
  <slot />
</body>
```

并在内联脚本中添加模糊度加载：

```astro
<script is:inline>
  // 加载模糊度
  const configCarrier = document.getElementById('config-carrier');
  const defaultBlur = configCarrier?.dataset.blur || '10';
  const blur = localStorage.getItem('blur') || defaultBlur;
  document.documentElement.style.setProperty('--bg-blur', `${blur}px`);
</script>
```

### 步骤 7: 添加 CSS 变量

在 `src/styles/variables.styl` 中添加 CSS 变量：

```stylus
:root
  --radius-large 1rem
  --content-delay 150ms
  --bg-blur 10px

define({
  // 背景图相关的变量
  --card-bg-transparent: oklch(1 0 0 / 0.85) oklch(0.23 0.015 var(--hue) / 0.85)
  --navbar-bg: oklch(1 0 0 / 0.8) oklch(0.23 0.015 var(--hue) / 0.8)
})
```

### 步骤 8: 在导航栏添加模糊设置按钮

修改 `src/components/Navbar.astro`，添加模糊设置按钮和面板：

```astro
<Search client:only="svelte"></Search>
{siteConfig.background.enable && (
  <button aria-label="Blur Settings" class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="blur-settings-switch">
    <Icon name="material-symbols:blur-on" class="text-[1.25rem]"></Icon>
  </button>
)}
<LightDarkSwitch client:only="svelte"></LightDarkSwitch>

<!-- ... -->

{siteConfig.background.enable && <BlurSettings client:only="svelte"></BlurSettings>}
```

并添加按钮点击事件处理：

```astro
<script>
function loadButtonScript() {
  // ... 其他按钮

  let blurSettingBtn = document.getElementById("blur-settings-switch");
  if (blurSettingBtn) {
    blurSettingBtn.onclick = function () {
      let blurSettingPanel = document.getElementById("blur-setting");
      if (blurSettingPanel) {
        blurSettingPanel.classList.toggle("float-panel-closed");
      }
    };
  }
}

loadButtonScript();
</script>
```

### 步骤 9: 添加半透明卡片样式

在 `src/styles/main.css` 中添加半透明卡片样式：

```css
@layer components {
  .card-base {
    @apply rounded-[var(--radius-large)] overflow-hidden bg-[var(--card-bg)] transition;
  }

  .card-base-transparent {
    @apply rounded-[var(--radius-large)] overflow-hidden bg-[var(--card-bg-transparent)] backdrop-blur-md transition;
  }
}
```

然后将各个组件的 `card-base` 类替换为 `card-base-transparent` 以使用半透明效果。

## 技术实现

功能实现涉及以下文件：
- `src/types/config.ts` - 配置类型定义
- `src/config.ts` - 配置项
- `src/layouts/Layout.astro` - 背景图渲染
- `src/components/Navbar.astro` - 模糊设置按钮
- `src/components/widget/BlurSettings.svelte` - 模糊调节面板
- `src/utils/setting-utils.ts` - 设置存储和读取
- `src/styles/variables.styl` - 样式变量

## 注意事项

1. 背景图片会影响页面加载速度，建议使用压缩后的图片
2. 模糊程度过高可能会影响视觉体验
3. 半透明效果在浅色主题下可能需要调整
4. 移动设备上建议使用较小的背景图片

## 常见问题

**Q: 为什么背景图不显示？**  
A: 检查 `background.enable` 是否为 `true`，图片路径是否正确。

**Q: 如何让背景图固定不滚动？**  
A: 当前实现已经是固定的，背景图不会随页面滚动。

**Q: 可以为不同页面设置不同背景图吗？**  
A: 当前版本所有页面使用同一背景图，如需不同背景需要修改代码。

---

希望这个教程能帮助你更好地使用 Fuwari 主题的背景图功能！
