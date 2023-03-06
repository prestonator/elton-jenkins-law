import { fetchData } from "@/src/api/server";
import {
	PracticeBySlugQuery,
	PracticeSlugQuery,
} from "@/src/api/queries";


export const getPracticeSlugs = async () => {
	const response = await fetchData(PracticeSlugQuery);
	const allPracticeSlugs = response?.data?.practiceAreas?.data ?? [];
	return allPracticeSlugs;
};

export const getPracticeAreaBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

	const res = await fetchData(PracticeBySlugQuery, {
		filters: { slug: { contains: slug } },
	});

	if (!res.data.practiceAreas.data || !res.data.practiceAreas.data[0]) {
		throw new Error(`No practice area data found for slug ${slug}`);
	}

	const { attributes } = res.data.practiceAreas.data[0];

	const practiceData = {
		heroText: attributes.heroText,
		heroImage: strapiUrl + attributes.heroImage.data.attributes.url,
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
		sections: attributes.sections.map((section) => {
			return {
				id: section.id,
				heading: section.heading,
				content: section.content,
			};
		}),
		special: attributes.special.map((special) => {
			return {
				id: special.id,
				heading: special.heading,
			};
		}),
	};

	return practiceData;
};
