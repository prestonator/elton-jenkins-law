import Link from "next/link";
import Image from "next/image";
import formatDate from "../utils/formatDate";
import urlBuilder from "../utils/imageUrl";
import ReactMarkdown from "react-markdown";
import styles from "@/src/styles/components/BlogCard.module.css";

const BlogCard = (props) => {
    const { title, author, excerpt, date, image, imageAlt, categories, slug } =
		props;


    return (
        <Link href={`blog/${slug}`} className={styles.blogCardContainer}>
			<div className={styles.blogCardWrapper}>
				<div className={styles.imageWrapper}>
					<Image
						src={urlBuilder(image)}
						fill
						alt={imageAlt}
						className={styles.image}
						sizes="(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						33vw"
					/>
				</div>
				<div className={styles.textWrapper}>
					<h4>{title}</h4>
					<span>
						{formatDate(date)} | {categories}
					</span>
					<p>By {author}</p>
					<div>
						<ReactMarkdown>{`${excerpt}...`}</ReactMarkdown>
					</div>
				</div>
			</div>
		</Link>
    );
};

export default BlogCard;