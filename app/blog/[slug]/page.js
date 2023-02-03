import React from "react";
import ReactMarkdown from "react-markdown";
import { AllPostData, PostFilterBySlug } from "@/src/api/queries";
import { fetchData } from "@/src/api/server";
import {
	HiOutlineSquares2X2,
	HiOutlineChatBubbleOvalLeft,
	HiOutlineCalendar,
} from "react-icons/hi2";
import Image from "next/image";
import styles from "@/src/styles/pages/BlogPost.module.css";
import formatDate from "@/src/utils/formatDate";
import urlBuilder from "@/src/utils/imageUrl";

export async function generateStaticParams() {
	const postsData = (await fetchData(AllPostData)).data.blogPosts.data;

	return postsData.map((post) => ({
		slug: post.attributes.slug,
	}));
}

export default async function Page({ params }) {
	const postRes = await fetchData(PostFilterBySlug, {
		filters: { slug: { contains: params.slug } },
	}).then((res) => {
		return res.data.blogPosts.data[0].attributes;
	});

	return (
		<>
			<section className={styles.sectionOne}>
				<h1>{postRes.Title}</h1>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<div className={styles.imageContainer}>
						<Image src={urlBuilder(`${postRes.image.data.attributes.url}`)} alt={postRes.image.data.attributes.alternativeText} fill priority="high"  />
					</div>
				</div>
				<div className={styles.col}>
					<div className={`${styles.row} ${styles.authorContainer}`}>
						<div className={styles.iconContainer}>
							<div className={styles.avatarContainer}>
								<Image src={urlBuilder(`${postRes.author.data.attributes.avatar.data.attributes.url}`)} alt={postRes.author.data.attributes.avatar.data.attributes.alternativeText} fill sizes={`(max-width: 1000px) 100vw, 1000px`} />
							</div>
						</div>
						<div className={styles.contentContainer}>
							<span>Written by {postRes.author.data.attributes.name}</span>
							<p>{postRes.author.data.attributes.bio}</p>
						</div>
					</div>
					<div className={`${styles.row} ${styles.categoryContainer}`}>
						<div className={styles.iconContainer}>
							<HiOutlineSquares2X2 />
						</div>
						<div className={styles.contentContainer}>
							{postRes.categories.data
								.map((item) => item.attributes.category)
								.join(" | ")}
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
						<div className={styles.contentContainer}>{formatDate(`${postRes.datePublished}`)}</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.contentContainer}>
					<ReactMarkdown>{`${postRes.Content}`}</ReactMarkdown>
				</div>
			</section>
		</>
	);
}
