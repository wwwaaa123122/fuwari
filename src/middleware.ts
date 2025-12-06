import { defineMiddleware } from "astro:middleware";

/**
 * 轻量级重定向中间件 - 作为备用，补充 astro.config.mjs 中的 redirects
 * 在应用层处理，确保所有平台部署目标（Vercel、Cloudflare、Netlify 等）都能生效
 */
const REDIRECTS: Record<string, string> = {
	"/v6": "https://8.6.8.f.0.7.4.0.1.0.0.2.ip6.arpa/",
	"/gh": "https://gh.2.7.0.0.4.2.0.0.0.7.4.0.1.0.0.2.ip6.arpa/wwwaaa123122",
	"/bot": "/posts/how-use-bot",
};

export const onRequest = defineMiddleware(async (context, next) => {
	const pathname = new URL(context.request.url).pathname;
	const cleanPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

	if (REDIRECTS[cleanPath] || REDIRECTS[pathname]) {
		const target = REDIRECTS[cleanPath] || REDIRECTS[pathname];
		return context.redirect(target, 302);
	}

	return next();
});
