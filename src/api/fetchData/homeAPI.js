import { fetchData } from "@/src/api/server";
import { HomePageQuery } from "@/src/api/queries";

export const fetchHomePageData = async () => {
	const response = await fetchData(HomePageQuery);
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const { attributes } = response?.data?.homePage?.data ?? [];

	const homePageData = {
		title: attributes.title,
		info: attributes.info,
		heroImageUrl: `${strapiUrl}${attributes.heroImage.data.attributes.url}`,
		heroImageAlt: attributes.heroImage.data.attributes.alternativeText,
		heroButton: attributes.button.map((item) => {
			return {
				label: item.link.label,
				href: item.link.href,
			};
		}),
		staff: attributes.staffSection.map((item) => {
			const id = item.id
			const avatarUrl = `${strapiUrl}${item.avatar.data.attributes.url}`;
			const avatarAlt = item.avatar.data.attributes.alternativeText;
			const info = item.info;
			return { ...item, avatarUrl, avatarAlt, info, id };
		}),
	};

	return homePageData;
};
