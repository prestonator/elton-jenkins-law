import { fetchData } from "@/src/api/server";
import { TeamMemberById, TeamMemberData } from "@/src/api/queries";
import Image from "next/image";
import urlBuilder from "@/src/utils/imageUrl";
import styles from "@/src/styles/pages/TeamMember.module.css";
import TabbedContainer from "@/src/components/TabContainer";
import withSpace from "@/src/utils/withSpace";

export async function generateStaticParams() {
	const memberData = (await fetchData(TeamMemberData)).data.authors.data;
	//console.log(memberData);
	return memberData.map((member) => ({
		slug: member.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const memberRes = await fetchData(TeamMemberById, {
		filters: {
			slug: {
				contains: params.slug,
			},
		},
	}).then((res) => {
		return res.data.authors.data[0].attributes;
	});

	return (
		<>
			<section className={styles.sectionOne} id="section">
				<div className={styles.col}>
					<div className={styles.imageWrapper}>
						<Image
							fill
							sizes="100vw"
							src={urlBuilder(memberRes.headshot.data.attributes.url)}
							alt={`${memberRes.headshot.data.attributes.alternativeText}`}
						/>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.textWrapper}>
						<div className={styles.textHeading}>
							<h1>{memberRes.name}</h1>
							<span>{memberRes.position}</span>
						</div>

						<div className={styles.textMeta}>
							<h4>{memberRes.phone}</h4>
							<h4>{memberRes.email}</h4>
						</div>
						<p className={styles.textContent}>{memberRes.longBio}</p>
					</div>
				</div>
			</section>
			<section>
				<TabbedContainer
					tab={1}
					tabOne={withSpace(memberRes.tabContainer.tabOne)}
					tabTwo={withSpace(memberRes.tabContainer.tabTwo)}
					tabThree={withSpace(memberRes.tabContainer.tabThree)}
					tabFour={withSpace(memberRes.tabContainer.tabFour)}
					tab1Content={memberRes.tabContainer.tabOneContent}
					tab2Content={memberRes.tabContainer.tabTwoContent}
					tab3Content={memberRes.tabContainer.tabThreeContent}
					tab4Content={memberRes.tabContainer.tabFourContent}
				/>
			</section>
		</>
	);
}
