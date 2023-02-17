import { getNewsData } from "@/src/api/fetchData/fetchNews";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import BlogCard from "@/src/components/BlogCard";
import styles from "@/src/styles/pages/BlogPage.module.css";

export default async function Page() {
    const { allNewsData } = await getNewsData();
    const [newsBanner] = await getMediaData([28]);
	const { fullUrl: newsBannerUrl } = newsBanner;

    const halfLength = Math.ceil(allNewsData.length / 2);
	const firstHalf = allNewsData.slice(0, halfLength);
	const secondHalf = allNewsData.slice(halfLength);

	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `url(${newsBannerUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<div className={styles.textBlurb}>
						<h1>Blog</h1>
						<span>
							Latest
							<br />
							News
						</span>
						<p>
							Here you will find all of our blog posts. They can help answer
							questions you may have and provide general knowledge on various
							subjects. Both Criminal Law and Family Law posts are featured
							here.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.blogCol}>
					{firstHalf.map((post) => (
						<BlogCard
							key={post.id}
							title={post.attributes.Title}
							author={post.attributes.author.data.attributes.name}
							excerpt={post.attributes.excerpt}
							date={post.attributes.datePublished}
							image={post.attributes.image.data.attributes.url}
							imageAlt={post.attributes.image.data.attributes.alternativeText}
							slug={post.attributes.slug}
						/>
					))}
				</div>
				<div className={styles.blogCol}>
					{secondHalf.map((post) => (
						<BlogCard
							key={post.id}
							title={post.attributes.Title}
							author={post.attributes.author.data.attributes.name}
							excerpt={post.attributes.excerpt}
							date={post.attributes.datePublished}
							image={post.attributes.image.data.attributes.url}
							imageAlt={post.attributes.image.data.attributes.alternativeText}
							slug={post.attributes.slug}
						/>
					))}
				</div>
				<div className={styles.blogCol}>
					<div className={styles.row}>
						<div className={styles.searchBar}>
							<input type="text" />
							<input type="submit" value="Search" />
						</div>
					</div>
					<div className={styles.row}>
						<span>Categories</span>
						<ul>
							<li>Family Law</li>
							<li>Criminal Law</li>
							<li>Personal Injury</li>
						</ul>
					</div>
					<div className={styles.row}>
						<span>Recent Posts</span>
						<ul>
							<li>Family Law</li>
							<li>Criminal Law</li>
							<li>Personal Injury</li>
						</ul>
					</div>
					<div className={styles.row}>
						<span>Archives</span>
						<ul>
							<li>Family Law</li>
							<li>Criminal Law</li>
							<li>Personal Injury</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
