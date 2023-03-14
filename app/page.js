import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ButtonPrimary from "@/src/components/PrimaryButton";
import FeatureCard from "@/src/components/FeatureCard";
import { BsTelephone, BsCashStack, BsHouseDoor } from "react-icons/bs";
import { GiHandcuffs } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineStop, AiOutlineWarning } from "react-icons/ai";
import { fetchHomePageData } from "@/src/api/fetchData/homeAPI";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import StaffPreview from "./test/sectionScroll";

async function getData() {
	const response = await fetchHomePageData();
	return response;
}

export default async function Home() {
	const homePageData = await getData();
	const { title, heroButton, heroImageUrl, heroImageAlt, staff } = homePageData;
	return (
		<>
			<section className={styles.sectionOne} id="section">
				<div className={`${styles.col} ${styles.colText}`}>
					<div className={styles.textContainer}>
						<ReactMarkdown
							rehypePlugins={[rehypeRaw]}
						>{`${title}`}</ReactMarkdown>
					</div>
					<div className={styles.btnContainer}>
						{heroButton &&
							heroButton.map((item) => (
								<ButtonPrimary key={item.label} href={item.href}>
									{item.label}
								</ButtonPrimary>
							))}
					</div>
				</div>
				<div className={`${styles.col} ${styles.colImage}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={heroImageUrl}
							alt={heroImageAlt}
							fill
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.modalContainer}>
					<div className={styles.textContainer}>
						<span className={styles.subTitle}>Win in court today</span>
						<h2 className={styles.title}>Schedule a Free Consultation</h2>
						<div className={styles.btnContainer}>
							<ButtonPrimary href="/contact">Get Started</ButtonPrimary>
						</div>
					</div>
				</div>
			</section>
			<hr className={styles.sectionLine} />
			<section className={styles.sectionThree}>
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
			</section>
			<section className={styles.sectionFour}>
				<div className={styles.rowOne}>
					<h2>Why Choose Us?</h2>
				</div>
				<hr />
				<div className={styles.rowTwo}>
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
						heading="Payment Plans Available"
						content="We’ll work with you"
					/>
				</div>
			</section>
			<section className={styles.sectionFive}>
				<div className={styles.rowOne}>
					<h2>Practice Areas</h2>
				</div>
				<hr />
				<div className={styles.rowTwo}>
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
