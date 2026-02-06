import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Starlr blog",
	subtitle: "爱你所爱",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 360, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://eopfapi.acofork.com/pic?img=ua", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "二叉树树的随机图", // Credit text to be displayed
			url: "https://eopfapi.acofork.com/pic?img=ua", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://q2.qlogo.cn/headimg_dl?dst_uin=3385016019&spec=5", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "128×128", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/wwwaaa123122", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "统计",
			url: "https://umami.xc-lr.cn/share/FNH4YZYF9xPh0Xjt",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3385016019&spec=5", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "星辰旅人",
	bio: "Protect What You Love./爱你所爱！",
	links: [
		{
			name: "X",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/wwwaaa123122",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wwwaaa123122",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.xc-lr.cn/",
	shareId: "FNH4YZYF9xPh0Xjt",
	region: "us", // 'us' for US, 'eu' for EU
	timezone: "Asia/Shanghai",
};

export const statsConfig = {
	viewsText: "浏览",
	visitsText: "访客",
	loadingText: "统计加载中...",
	unavailableText:
		"-",
	getStatsText: (pageViews: number, visits: number) =>
		`${statsConfig.viewsText} ${pageViews} · ${statsConfig.visitsText} ${visits}`,
};

export const musicPlayerConfig = {
	enable: true,
	defaultVolume: 0.7,
	playlist: [
		{
			title: "使一颗心免于哀伤",
			artist: "知更鸟",
			url: "https://pan.mcxclr.top/api/raw/?path=/Music/%E4%BD%BF%E4%B8%80%E9%A2%97%E5%BF%83%E5%85%8D%E4%BA%8E%E5%93%80%E4%BC%A4%20-%20%E7%9F%A5%E6%9B%B4%E9%B8%9F_HOYO-MiX_Chevy.flac",
			cover: "https://p2.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg?param=130y130"
		},
		{
			title: "若我不曾见过太阳", 
			artist: "知更鸟",
			url: "https://pan.mcxclr.top/api/raw/?path=/Music/%E8%8B%A5%E6%88%91%E4%B8%8D%E6%9B%BE%E8%A7%81%E8%BF%87%E5%A4%AA%E9%98%B3%20-%20%E7%9F%A5%E6%9B%B4%E9%B8%9F_HOYO-MiX_Chevy.flac",
			cover: "https://p2.music.126.net/aR4BlDNkA84tFbg8bBpriA==/109951169585655912.jpg?param=130y130"
		}
	]
};
