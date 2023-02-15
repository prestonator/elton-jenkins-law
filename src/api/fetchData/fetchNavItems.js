import { fetchData } from "@/src/api/server";
import { NavItemQuery } from "@/src/api/queries";

export const getNavData = async (id) => {
	const navData = await fetchData(NavItemQuery, {
		navigationIdOrSlug: id,
	}).then((res) => {
		return res.data.renderNavigation;
	});
	return navData;
};
