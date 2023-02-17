import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import styles from "@/src/styles/pages/PracticeArea.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	const [criminalBanner] = await getMediaData([29]);
	const { fullUrl: criminalBannerUrl } = criminalBanner;
	return (
		<>
			<section
				className={styles.sectionOne}
				style={{
					backgroundImage: `url(${criminalBannerUrl})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles.row}>
					<div className={styles.textBlurb}>
						<h1>About</h1>
						<span>Criminal Defense</span>
						<p>
							We offer a wide variety of services relating to criminal defense.
							This page provides more information on those said services. Let us
							help you today!
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<h2>Criminal Defense: A Brief Overview</h2>
					<hr />
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<p>
						Criminal defense law is a type of legal practice that involves
						protecting the rights of an accused individual. At Elton Jenkins
						Law, P.L.L.C. in Oklahoma, lead criminal defense attorney Elton
						Jenkins is dedicated to providing top-notch defense services to
						clients facing criminal charges.
					</p>
					<p>
						With extensive experience in all aspects of criminal defense, Elton
						Jenkins is well-versed in the intricacies of Oklahoma criminal law
						and is committed to providing clients with the best possible
						defense.
					</p>
					<p>
						He is dedicated to protecting his clients’ rights and helping them
						navigate the criminal justice system. Whether it’s a misdemeanor or
						a felony, Elton Jenkins will work tirelessly to ensure that his
						clients receive a fair trial and the best possible outcome.
					</p>
				</div>
			</section>
			<section className={styles.sectionThree}>
                <div className={`${styles.row} ${styles.rowOne}`}>
                    <span>What We Do</span>
                    <h2>We Offer a Variety of Criminal Law Services</h2>
                    <hr />
                </div>
                <div className={`${styles.row} ${styles.rowTwo}`}></div>
            </section>
		</>
	);
}
