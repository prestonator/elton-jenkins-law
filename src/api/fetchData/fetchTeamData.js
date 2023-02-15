import { fetchData } from "@/src/api/server";
import { TeamMemberById, HeadshotQuery } from "@/src/api/queries";

export const getTeamData = async (slug, name) => {
	const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
	const teamData = await fetchData(TeamMemberById, {
		filters: {
			slug: {
				contains: slug,
			},
		},
	}).then((res) => {
		return res.data.authors.data[0].attributes;
	});

	const headshotData = await fetchData(HeadshotQuery, {
		filters: {
			name: {
				containsi: name,
			},
		},
	}).then((res) => {
		return res.data.authors.data[0].attributes.headshot.data;
	});

	return {
		teamData,
		headshotData,
	};
};
