import { fetchPracticeData, fetchPracticeDataBySlug } from "@/src/api/fetchData/practiceAPI";
import styles from "@/src/styles/pages/PracticeArea.module.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import FlipCard from "@/src/components/ServiceCard";

export async function generateStaticParams() {
	const practiceData = await fetchPracticeData();
	return practiceData.map((practice) => ({
		slug: practice.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const pageData = await fetchPracticeDataBySlug(params.slug);
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `url(${pageData.heroImage})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<div className={styles.textBlurb}>
						<ReactMarkdown
							remarkPlugins={[remarkBreaks]}
						>{`${pageData.heroText}`}</ReactMarkdown>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<ReactMarkdown>{`${pageData.firstHeading}`}</ReactMarkdown>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<ReactMarkdown
						remarkPlugins={[remarkBreaks]}
					>{`${pageData.firstContent}`}</ReactMarkdown>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<ReactMarkdown
						remarkPlugins={[remarkBreaks]}
					>{`${pageData.secondHeading}`}</ReactMarkdown>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					{pageData.card.map((card) => (
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
		</>
	);
}
