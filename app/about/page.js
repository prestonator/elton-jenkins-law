import styles from "@/src/styles/pages/About.module.css";
import Image from "next/image";
import Link from "next/link";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";

export default async function Page() {
	const [staircasePhoto] = await getMediaData([23]);
	const [scalesOfJusticePhoto] = await getMediaData([24]);
	const { fullUrl: scalesOfJusticePhotoUrl, altText: scalesOfJusticePhotoAlt } =
		scalesOfJusticePhoto;
	const { fullUrl: staircasePhotoUrl, altText: staircasePhotoAlt } =
		staircasePhoto;

	return (
		<>
			<section className={styles.sectionOne} id="section">
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={styles.imageWrapper}>
						<Image
							src={staircasePhotoUrl}
							alt={staircasePhotoAlt}
							fill
							className={styles.image}
						/>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={styles.textContainer}>
						<h1 className={styles.pageHeading}>About Us</h1>
						<p className={styles.pageSubHeading}>
							On this page, you can learn what makes our firm the best option
							for you. You will also be introduced to our employees
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo} id="section">
				<div className={`${styles.col} ${styles.colOne}`}>
					<div className={styles.textContainer}>
						<h3>Protecting the Law for Over 20 Years</h3>
						<hr />
						<p>
							Here at Elton Jenkins Law, P.L.L.C. we believe in honesty,
							integrity, and justice. That’s why we have some of the most
							satisfied clients. We will be with you every step of the way,
							through thick and thin, through ice and fire. With rates you can
							afford and attorneys that you can trust, it will be difficult to
							find another like us.
						</p>
					</div>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={`${styles.imageWrapper}`}>
						<Image className={styles.image} src={scalesOfJusticePhotoUrl} alt={scalesOfJusticePhotoAlt} fill />
					</div>
				</div>
			</section>
			<section className={styles.sectionThree} id="section">
				<div className={`${styles.row} ${styles.rowOne}`}>
					<div className={`${styles.textContainer}`}>
						<h3>Our Practice</h3>
						<hr />
					</div>
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}></div>
				<div className={`${styles.row} ${styles.rowThree}`}></div>
				</section>
		</>
	);
}
