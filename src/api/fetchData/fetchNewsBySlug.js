import { fetchData } from "@/src/api/server";
import { NewsBySlugQuery } from "@/src/api/queries";
import formatDate from "@/src/utils/formatDate";

export const getNewsBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const res = await fetchData(NewsBySlugQuery, {
		filters: { slug: { contains: slug } },
	}).catch((err) => {
		console.error(`Error fetching news data for slug ${slug}:`, err);
		return null;
	});
	if (!res) return null;

	const { attributes } = res.data.inTheNewspapers.data[0];
	return {
		articleSlug: attributes.slug,
        imageUrl: strapiUrl + attributes.image.data.attributes.url,
        imageAlt: attributes.image.data.attributes.alternativeText,
        avatarUrl: strapiUrl + attributes.author.data.attributes.avatar.data.attributes.url,
        avatarAlt: attributes.author.data.attributes.avatar.data.attributes.alternativeText,
        authorName: attributes.author.data.attributes.name,
        authorBio: attributes.author.data.attributes.bio,
        publishDate: formatDate(attributes.datePublished),
        postContent: attributes.content,
        postTitle: attributes.title,
	};
};
