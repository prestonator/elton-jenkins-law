import { fetchData } from "@/src/api/server";
import { PostBySlugQuery } from "@/src/api/queries";
import formatDate from "@/src/utils/formatDate";

export const getPostBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const res = await fetchData(PostBySlugQuery, {
		filters: { slug: { contains: slug } },
	}).catch((err) => {
		console.error(`Error fetching post data for slug ${slug}:`, err);
		return null;
	});
	if (!res) return null;

	const { attributes } = res.data.blogPosts.data[0];
	return {
		postSlug: attributes.slug,
        imageUrl: strapiUrl + attributes.image.data.attributes.url,
        imageAlt: attributes.image.data.attributes.alternativeText,
        avatarUrl: strapiUrl + attributes.author.data.attributes.avatar.data.attributes.url,
        avatarAlt: attributes.author.data.attributes.avatar.data.attributes.alternativeText,
        authorName: attributes.author.data.attributes.name,
        authorBio: attributes.author.data.attributes.bio,
        categories: attributes.categories.data.map((item) => item.attributes.category),
        publishDate: formatDate(attributes.datePublished),
        postContent: attributes.content,
        postTitle: attributes.title,
	};
};
