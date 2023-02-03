import { fetchData } from "@/src/api/server";
import { AllPostData, MediaQuery } from "@/src/api/queries";
import styles from "@/src/styles/pages/BlogPage.module.css";
import BlogCard from "@/src/components/BlogCard";
import urlBuilder from "@/src/utils/imageUrl";

export default async function Page() {
	const postsData = (await fetchData(AllPostData)).data.blogPosts.data;
	const blogBanner = (
		await fetchData(MediaQuery, {
			uploadFileId: 7,
		})
	).data.uploadFile.data;
	
    const blogBannerUrl = urlBuilder(`${blogBanner.attributes.url}`);
    
	const halfLength = Math.ceil(postsData.length / 2);
	const firstHalf = postsData.slice(0, halfLength);
	const secondHalf = postsData.slice(halfLength);

	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `url(${blogBannerUrl})`,
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
							categories={post.attributes.categories.data
								.map((item) => item.attributes.category)
								.join(", ")}
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
							categories={post.attributes.categories.data
								.map((item) => item.attributes.category)
								.join(", ")}
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
