/**
 * Production SEO constants.
 * Canonical host only — never preview/deployment URLs.
 */
export const siteUrl = "https://jay-shrivastava-dev.vercel.app/" as const;

export const seo = {
	home: {
		title: "Jay Shrivastava — Software Engineer",
		description:
			"Software engineer building production-ready web applications with React, TypeScript and modern web technologies.",
		ogDescription:
			"Software engineer building production-ready web applications.",
		path: "/",
	},
	freelance: {
		title: "Full-Stack Web Development — Jay Shrivastava",
		description:
			"Production-ready websites and web applications built from requirements through deployment.",
		ogDescription:
			"Production-ready web applications built from requirements through deployment.",
		path: "/freelance",
	},
} as const;

export function absoluteUrl(path = "/") {
	if (path === "/" || path === "") return `${siteUrl}/`;
	return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
