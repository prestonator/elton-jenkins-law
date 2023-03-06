import React from "react";
import {
	getPracticeSlugs,
	getPracticeAreaBySlug,
} from "@/src/api/fetchData/practiceAPI";
import styles from "./PracticeArea.module.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import FlipCard from "@/src/components/ServiceCard";

export async function generateStaticParams() {
	const practiceSlugs = await getPracticeSlugs();
	return practiceSlugs.map((practice) => ({
		slug: practice.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const practiceData = await getPracticeAreaBySlug(params.slug);
	return (
		<div>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `url(${practiceData.heroImage})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<div className={styles.textBlurb}>
						<ReactMarkdown
							remarkPlugins={[remarkBreaks]}
						>{`${practiceData.heroText}`}</ReactMarkdown>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				{practiceData.sections.map((section) => (
					<>
						<div className={styles.heading}>
							<ReactMarkdown>{`${section.heading}`}</ReactMarkdown>
						</div>
						<div className={styles.content}>
							<ReactMarkdown
								remarkPlugins={[remarkBreaks]}
							>{`${section.content}`}</ReactMarkdown>
						</div>
					</>
				))}
			</section>
			<section className={styles.sectionThree}>
				{practiceData.special.map((item) => (
					<div className={styles.heading} key={item.id}>
						<ReactMarkdown
							remarkPlugins={[remarkBreaks]}
						>{`${item.heading}`}</ReactMarkdown>
					</div>
				))}
				<div className={`${styles.row} ${styles.rowTwo}`}>
					{practiceData.card.map((card) => (
						<FlipCard
							key={card.id}
							title={card.title}
							excerpt={card.excerpt}
							content={card.content}
							image={card.image}
							href=""
						/>
					))}
				</div>
			</section>
		</div>
	);
}
