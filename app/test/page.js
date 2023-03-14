import { fetchHomePageData } from "@/src/api/fetchData/homeAPI";
import StaffPreview from "./sectionScroll";

async function getData() {
	const response = await fetchHomePageData();
	return response;
}

export default async function Test() {
    const homePageData = await getData();
    const { staff } = homePageData;
    //console.log(staff);
	return (
		<>
			{staff &&
				staff.map((item, index) => (
					<StaffPreview
						key={item.id}
						socialIcons={item.socialIcons}
						avatarUrl={item.avatarUrl}
						avatarAlt={item.avatarAlt}
						info={item.info}
						isEven={index % 2 === 0}
						index={index}
						totalItems={staff.length}
						button={item.button}
					/>
				))}
		</>
	);
}
