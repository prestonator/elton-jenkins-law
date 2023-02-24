import { fetchData } from "@/src/api/server";
import { NewsQuery, NewsBySlugQuery } from "@/src/api/queries";
import formatDate from "@/src/utils/formatDate";

export const fetchNewsData = async () => {
	const response = await fetchData(NewsQuery);
	const allNewsData = response?.data?.inTheNewspapers?.data ?? [];
	return allNewsData;
};

export const fetchNewsDataBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const response = await fetchData(NewsBySlugQuery, {
		filters: { slug: { contains: slug } },
	}).catch((err) => {
		console.error(`Error fetching news data for slug ${slug}:`, err);
		return null;
	});
	if (!response) return null;

	const { attributes } = response.data.inTheNewspapers.data[0];
	return {
		articleSlug: attributes.slug,
		imageUrl: strapiUrl + attributes.image.data.attributes.url,
		imageAlt: attributes.image.data.attributes.alternativeText,
		avatarUrl:
			strapiUrl + attributes.author.data.attributes.avatar.data.attributes.url,
		avatarAlt:
			attributes.author.data.attributes.avatar.data.attributes.alternativeText,
		authorName: attributes.author.data.attributes.name,
		authorBio: attributes.author.data.attributes.bio,
		publishDate: formatDate(attributes.datePublished),
		postContent: attributes.content,
		postTitle: attributes.title,
	};
};
