import { fetchData } from "@/src/api/server";
import { AllPostsQuery } from "@/src/api/queries";

export const getPostData = async () => {
	const allPostData = await fetchData(AllPostsQuery).then((res) => {
		return res.data.blogPosts.data;
	});

	return {
		allPostData,
	};
};
