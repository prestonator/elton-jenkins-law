import { fetchData } from "@/src/api/server";
import { StaffQuery } from "@/src/api/queries";

export const getAllStaffData = async () => {
	const staffData = await fetchData(StaffQuery).then((res) => {
		return res.data.authors.data;
	});

	return {
		staffData,
	};
};
