import React from "react";
import ReactMarkdown from "react-markdown";
import { fetchNewsData, fetchNewsDataBySlug } from "@/src/api/fetchData/newsAPI";
import {
	HiOutlineSquares2X2,
	HiOutlineChatBubbleOvalLeft,
	HiOutlineCalendar,
} from "react-icons/hi2";
import Image from "next/image";
import styles from "@/src/styles/pages/BlogPost.module.css";

export async function generateStaticParams() {
	const allNewsData = await fetchNewsData();

	return allNewsData.map((post) => ({
		slug: post.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const newsRes = await fetchNewsDataBySlug(params.slug);

	return (
		<>
			<section className={styles.sectionOne}>
				<h1>{newsRes.postTitle}</h1>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<div className={styles.imageContainer}>
						<Image
							src={newsRes.imageUrl}
							alt={newsRes.imageAlt}
							fill
							priority
							sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
						/>
					</div>
				</div>
				<div className={styles.col}>
					<div className={`${styles.row} ${styles.authorContainer}`}>
						<div className={styles.iconContainer}>
							<div className={styles.avatarContainer}>
								<Image
									src={newsRes.avatarUrl}
									alt={newsRes.avatarAlt}
									fill
									sizes={`(max-width: 1000px) 100vw, 1000px`}
								/>
							</div>
						</div>
						<div className={styles.contentContainer}>
							<span>Written by {newsRes.authorName}</span>
							<p>{newsRes.authorBio}</p>
						</div>
					</div>
					<div className={`${styles.row} ${styles.categoryContainer}`}>
						<div className={styles.iconContainer}>
							<HiOutlineSquares2X2 />
						</div>
						<div className={styles.contentContainer}>
							In the News
						</div>
					</div>
					<div className={`${styles.row} ${styles.commentsContainer}`}>
						<div className={styles.iconContainer}>
							<HiOutlineChatBubbleOvalLeft />
						</div>
						<div className={styles.contentContainer}>n comments</div>
					</div>
					<div className={`${styles.row} ${styles.dateContainer}`}>
						<div className={styles.iconContainer}>
							<HiOutlineCalendar />
						</div>
						<div className={styles.contentContainer}>
							{newsRes.publishDate}
						</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.contentContainer}>
					<ReactMarkdown>{`${newsRes.postContent}`}</ReactMarkdown>
				</div>
			</section>
		</>
	);
}
