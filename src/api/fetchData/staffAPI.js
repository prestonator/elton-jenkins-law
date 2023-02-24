import { fetchData } from "@/src/api/server";
import { StaffQuery, StaffBySlugQuery } from "@/src/api/queries";

export const fetchStaffData = async () => {
	const response = await fetchData(StaffQuery);
	const allStaffData = response?.data?.authors?.data ?? [];
	return allStaffData;
};

export const fetchStaffDataBySlug = async (slug) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const res = await fetchData(StaffBySlugQuery, {
		filters: { slug: { contains: slug } },
	}).catch((err) => {
		console.error(`Error fetching team member data for slug ${slug}:`, err);
		return null;
	});
	if (!res) return null;

	const { attributes } = res.data.authors.data[0];
	return {
		staffSlug: attributes.slug,
		staffName: attributes.name,
		staffPosition: attributes.position,
		staffPhone: attributes.phone,
		staffEmail: attributes.email,
		staffBio: attributes.bio,
		staffShortBio: attributes.shortBio,
		staffLongBio: attributes.longBio,
		staffLocation: attributes.location,
		headshotUrl: strapiUrl + attributes.headshot.data.attributes.url,
		headshotAlt: attributes.headshot.data.attributes.alternativeText,
		tabOne: attributes.tabContainer.tabOne,
		tabOneContent: attributes.tabContainer.tabOneContent,
		tabTwo: attributes.tabContainer.tabTwo,
		tabTwoContent: attributes.tabContainer.tabTwoContent,
		tabThree: attributes.tabContainer.tabThree,
		tabThreeContent: attributes.tabContainer.tabThreeContent,
		tabFour: attributes.tabContainer.tabFour,
		tabFourContent: attributes.tabContainer.tabFourContent,
	};
};
