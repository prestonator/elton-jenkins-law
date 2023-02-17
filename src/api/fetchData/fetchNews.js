import { fetchData } from "@/src/api/server";
import { AllNewsQuery } from "@/src/api/queries";

export const getNewsData = async () => {
	const allNewsData = await fetchData(AllNewsQuery).then((res) => {
		return res.data.inTheNewspapers.data;
	});

	return {
		allNewsData,
	};
};
