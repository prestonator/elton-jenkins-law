import { fetchData } from "@/src/api/server";
import { AllPostsQuery, PostBySlugQuery } from "@/src/api/queries";
import formatDate from "@/src/utils/formatDate";

export const fetchAllPostsData = async () => {
	const response = await fetchData(AllPostsQuery);
	const allPostData = response?.data?.blogPosts?.data ?? [];
	return allPostData;
};

export const fetchPostDataBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const response = await fetchData(PostBySlugQuery, {
		filters: { slug: { contains: slug } },
	});

	if (!response?.data?.blogPosts?.data[0]) return null;

	const {
		title,
		slug: postSlug,
		image,
		author,
		categories,
		content: postContent,
		datePublished,
	} = response.data.blogPosts.data[0].attributes;

	const imageUrl = `${strapiUrl}${image.data.attributes.url}`;
	const imageAlt = image.data.attributes.alternativeText;
	const avatarUrl = `${strapiUrl}${author.data.attributes.avatar.data.attributes.url}`;
	const avatarAlt =
		author.data.attributes.avatar.data.attributes.alternativeText;
	const authorName = author.data.attributes.name;
	const authorBio = author.data.attributes.bio;
	const publishDate = formatDate(datePublished);
	const postTitle = title;

	return {
		postSlug,
		imageUrl,
		imageAlt,
		avatarUrl,
		avatarAlt,
		authorName,
		authorBio,
		categories: categories.data.map((item) => item.attributes.category),
		publishDate,
		postContent,
		postTitle,
	};
};
