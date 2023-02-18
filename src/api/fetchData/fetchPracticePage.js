import { fetchData } from "@/src/api/server";
import { PracticeAreaPageQuery } from "@/src/api/queries";

export const getPracticePageData = async (title) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

	const res = await fetchData(PracticeAreaPageQuery, {
		filters: { pageTitle: { containsi: title } },
	}).catch((err) => {
		console.error(`Error fetching page data for page ${title}:`, err);
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
