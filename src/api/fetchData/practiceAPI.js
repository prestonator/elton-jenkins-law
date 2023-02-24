import { fetchData } from "@/src/api/server";
import { PracticeQuery, PracticeBySlugQuery } from "@/src/api/queries";

export const fetchPracticeData = async () => {
	const response = await fetchData(PracticeQuery);
	const allPracticeData = response?.data?.practiceAreas?.data ?? [];
	return allPracticeData;
};

export const fetchPracticeDataBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

	const res = await fetchData(PracticeBySlugQuery, {
		filters: { slug: { contains: slug } },
	}).catch((err) => {
		console.error(`Error fetching page data for page ${slug}:`, err);
		return null;
	});
	if (!res) return null;

	const { attributes } = res.data.practiceAreas.data[0];
	return {
		heroText: attributes.heroText,
		heroImage: strapiUrl + attributes.heroImage.data.attributes.url,
		firstHeading: attributes.firstHeading,
		firstContent: attributes.firstContent,
		secondHeading: attributes.secondHeading,
		card: attributes.flipCard.map((item) => {
			return {
				id: item.id,
				number: item.number,
				title: item.title,
				excerpt: item.excerpt,
				content: item.content,
				image: strapiUrl + item.image.data.attributes.url,
				imageAlt: item.image.data.attributes.alternativeText,
			};
		}),
	};
};
