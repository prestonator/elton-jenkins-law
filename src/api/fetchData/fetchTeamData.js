import { fetchData } from "@/src/api/server";
import { TeamMemberById } from "@/src/api/queries";

export const getTeamData = async (slug) => {
	const data = await fetchData(TeamMemberById, {
		filters: {
			slug: {
				contains: slug,
			},
		},
	}).then((res) => {
		return res.data.authors.data[0].attributes;
	});
	return data;
};
