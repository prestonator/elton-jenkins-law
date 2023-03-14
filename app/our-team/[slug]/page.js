import {
	fetchStaffData,
	fetchStaffDataBySlug,
} from "@/src/api/fetchData/staffAPI";
import Image from "next/image";
import styles from "@/src/styles/pages/TeamMember.module.css";
import TabbedContainer from "@/src/components/TabContainer";
import withSpace from "@/src/utils/withSpace";

export async function generateStaticParams() {
	const staffData = await fetchStaffData();
	return staffData.map((staff) => ({
		slug: staff.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const memberRes = await fetchStaffDataBySlug(params.slug);

	// Create an array of objects containing the title and content for each tab
	const tabs = [
		{ title: withSpace(memberRes.tabOne), content: memberRes.tabOneContent },
		{ title: withSpace(memberRes.tabTwo), content: memberRes.tabTwoContent },
		{
			title: withSpace(memberRes.tabThree),
			content: memberRes.tabThreeContent,
		},
		{ title: withSpace(memberRes.tabFour), content: memberRes.tabFourContent },
	];

	return (
		<>
			<section className={styles.sectionOne}>
				<div className={styles.col}>
					<div className={styles.imageWrapper}>
						<Image
							fill
							sizes="100vw"
							src={memberRes.headshotUrl}
							alt={memberRes.headshotAlt}
						/>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.textWrapper}>
						<div className={styles.textHeading}>
							<h1>{memberRes.staffName}</h1>
							<span>{memberRes.staffPosition}</span>
						</div>

						<div className={styles.textMeta}>
							<h4>{memberRes.staffPhone}</h4>
							<h4>{memberRes.staffEmail}</h4>
						</div>
						<p className={styles.textContent}>{memberRes.staffLongBio}</p>
					</div>
				</div>
			</section>
			<section>
				<TabbedContainer tab={1} tabs={tabs} />
			</section>
		</>
	);
}
