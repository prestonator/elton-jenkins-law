import styles from "./page.module.css";
import Image from "next/image";
import urlBuilder from "@/src/utils/imageUrl";
import ButtonPrimary from "@/src/components/PrimaryButton";
import { getTeamData } from "@/src/api/fetchData/fetchTeamData";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import ReactMarkdown from "react-markdown";
import FeatureCard from "@/src/components/FeatureCard";
import { BsTelephone, BsCashStack, BsHouseDoor } from "react-icons/bs";
import { GiHandcuffs } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineStop, AiOutlineWarning } from "react-icons/ai";

export default async function Home() {
	const tableData = await getMediaData(8);
	const eltonData = await getTeamData("elton-jenkins");
	const ericData = await getTeamData("eric-kroier");
	const gregData = await getTeamData("greg-milstead");

	return (
		<>
			<section className={`${styles.sectionOne}`} id="section">
				<div className={`${styles.col} ${styles.colText}`}>
					<div className={`${styles.textContainer}`}>
						<span className={`${styles.subTitle}`}>
							Results That Speak for Themselves
						</span>
						<h1 className={`${styles.title}`}>
							Proudly
							<br />
							Serving
							<br />
							Oklahoma
						</h1>
						<span className={`${styles.subTitle}`}>
							In Criminal & Family Law
						</span>
					</div>
					<div className={`${styles.btnContainer}`}>
						<ButtonPrimary href="/about">Learn More</ButtonPrimary>
						<ButtonPrimary href="/contact">Contact Us</ButtonPrimary>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colImage}`}>
					<div className={`${styles.imageWrapper}`}>
						<Image
							src={urlBuilder(`${tableData.attributes.url}`)}
							alt={tableData.attributes.alternativeText}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
				</div>
			</section>
			<section className={`${styles.sectionTwo}`}>
				<div className={`${styles.modalContainer}`}>
					<div className={`${styles.textContainer}`}>
						<span className={`${styles.subTitle}`}>Win in court today</span>
						<h2 className={`${styles.title}`}>Schedule a Free Consultation</h2>
						<div className={`${styles.btnContainer}`}>
							<ButtonPrimary href="/contact">Get Started</ButtonPrimary>
						</div>
					</div>
				</div>
			</section>
			<hr className={`${styles.sectionLine}`} />
			<section className={`${styles.sectionThree}`}>
				<div className={`${styles.row} ${styles.rowOdd}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={urlBuilder(`${eltonData.headshot.data.attributes.url}`)}
							alt={eltonData.headshot.data.attributes.alternativeText}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
					<div className={styles.textContainer}>
						<h3>{eltonData.name}</h3>
						<span>{eltonData.position}</span>
						<span>
							{eltonData.email} | {eltonData.phone}
						</span>
						<hr />

						<ReactMarkdown>{`${eltonData.shortBio}`}</ReactMarkdown>
						<ButtonPrimary
							color="var(--color-white)"
							hoverColor="var(--color-white)"
							href="/our-team/elton-jenkins"
						>
							Learn More
						</ButtonPrimary>
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowEven}`}>
					<div className={styles.textContainer}>
						<h3>{ericData.name}</h3>
						<span>{ericData.position}</span>
						<span>
							{ericData.email} | {ericData.phone}
						</span>
						<hr />

						<ReactMarkdown>{`${ericData.shortBio}`}</ReactMarkdown>
						<ButtonPrimary
							color="var(--color-white)"
							hoverColor="var(--color-white)"
							href="/our-team/eric-kroier"
						>
							Learn More
						</ButtonPrimary>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							src={urlBuilder(`${ericData.headshot.data.attributes.url}`)}
							alt={ericData.headshot.data.attributes.alternativeText}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowOdd}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={urlBuilder(`${gregData.headshot.data.attributes.url}`)}
							alt={gregData.headshot.data.attributes.alternativeText}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
					<div className={styles.textContainer}>
						<h3>{gregData.name}</h3>
						<span>{gregData.position}</span>
						<span>
							{gregData.email} | {gregData.phone}
						</span>
						<hr />

						<ReactMarkdown>{`${gregData.shortBio}`}</ReactMarkdown>
						<ButtonPrimary
							color="var(--color-white)"
							hoverColor="var(--color-white)"
							href="/our-team/greg-milstead"
						>
							Learn More
						</ButtonPrimary>
					</div>
				</div>
			</section>
			<section className={`${styles.sectionFour}`}>
				<div className={`${styles.rowOne}`}>
					<h2>Why Choose Us?</h2>
				</div>
				<hr />
				<div className={`${styles.rowTwo}`}>
					<FeatureCard
						href="/contact"
						icon={<BsTelephone />}
						heading="Free Consultation"
						content="Call us today to schedule!"
					/>
					<FeatureCard
						href="/criminal-defense"
						icon={<GiHandcuffs />}
						heading="Criminal Defense"
						content="We represent almost all criminal law cases"
					/>
					<FeatureCard
						href="/family-law"
						icon={<MdFamilyRestroom />}
						heading="Family Law"
						content="We represent various family law matters."
					/>
					<FeatureCard
						href="/contact"
						icon={<BsCashStack />}
						heading="Payment Plans Avaliable"
						content="We’ll work with you"
					/>
				</div>
			</section>
			<section className={`${styles.sectionFive}`}>
				<div className={`${styles.rowOne}`}>
					<h2>Practice Areas</h2>
				</div>
				<hr />
				<div className={`${styles.rowTwo}`}>
					<FeatureCard
						href="/criminal-defense"
						icon={<AiOutlineStop />}
						heading="Criminal Defense"
						content="People make mistakes and mistakes are okay. That’s why our team, with over 20 years of experience, strive to achieve the best possible outcome for you."
						hasButton={
							<ButtonPrimary href="/criminal-defense">Learn More</ButtonPrimary>
						}
					/>
					<FeatureCard
						href="/family-law"
						icon={<BsHouseDoor />}
						heading="Family Law"
						content="It’s hard to imagine yourself in a tough family situation. That’s why we will be there every step of the way and help you find what’s best for you and your family."
						hasButton={
							<ButtonPrimary href="/criminal-defense">Learn More</ButtonPrimary>
						}
					/>
					<FeatureCard
						href="/personal-injury"
						icon={<AiOutlineWarning />}
						heading="Personal Injury"
						content="We understand that accidents happen and that’s why we will be there to help you get the compensation you deserve."
						hasButton={
							<ButtonPrimary href="/criminal-defense">Learn More</ButtonPrimary>
						}
					/>
				</div>
			</section>
		</>
	);
}
