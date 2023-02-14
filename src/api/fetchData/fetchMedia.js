import { fetchData } from "@/src/api/server";
import { MediaQuery } from "@/src/api/queries";

export const getMediaData = async (id) => {
	const data = await fetchData(MediaQuery, {
		uploadFileId: id,
	}).then((res) => {
		return res.data.uploadFile.data;
	});
	return data;
};
