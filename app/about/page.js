import styles from "@/src/styles/pages/About.module.css";
import Image from "next/image";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import PracticeBlurb from "@/src/components/PracticeBlurb";
import {
	BsBriefcase,
	BsLock,
	BsFileEarmarkText,
	BsHouseDoor,
} from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineDollarCircle } from "react-icons/ai";
import ButtonPrimary from "@/src/components/PrimaryButton";

export default async function Page() {
	const [staircasePhoto] = await getMediaData([23]);
	const [scalesOfJusticePhoto] = await getMediaData([24]);
	const [eltonAndEricPhoto] = await getMediaData([26]);

	const { fullUrl: staircasePhotoUrl, altText: staircasePhotoAlt } =
		staircasePhoto;
	const { fullUrl: scalesOfJusticePhotoUrl, altText: scalesOfJusticePhotoAlt } =
		scalesOfJusticePhoto;
	const { fullUrl: eltonAndEricPhotoUrl, altText: eltonAndEricPhotoAlt } =
		eltonAndEricPhoto;

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
						<Image
							className={styles.image}
							src={scalesOfJusticePhotoUrl}
							alt={scalesOfJusticePhotoAlt}
							fill
						/>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree} id="section">
				<div className={`${styles.row} ${styles.rowOne}`}>
					<h3>Our Practice</h3>
					<hr />
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<PracticeBlurb
						icon={<BsBriefcase />}
						heading="Felony"
						content="Whether it be theft or murder, we have you covered. We also do sex crimes."
					/>
					<PracticeBlurb
						icon={<BsLock />}
						heading="Misdemeanor"
						content="No criminal case is too small for a defense attorney. That’s why we offer our services to any misdemeanor case."
					/>
					<PracticeBlurb
						icon={<BsFileEarmarkText />}
						heading="Expungement"
						content="Tired of your past self constantly reminding you and employers of your mistakes? We offer expungements to give you a clean slate."
					/>
				</div>
				<div className={`${styles.row} ${styles.rowThree}`}>
					<PracticeBlurb
						icon={<BsHouseDoor />}
						heading="Divorce"
						content="Divorce is tough, no one should have to go through it. With the help of an attorney, you can alleviate the burden and gain a succesful outcome."
					/>
					<PracticeBlurb
						icon={<AiOutlineDollarCircle />}
						heading="Child Custody"
						content="Did your ex unfairly take your children? We know getting custody of children is difficult, that’s why we offer cutting-edge custody services."
					/>
					<PracticeBlurb
						icon={<AiOutlineLineChart />}
						heading="Child Support & Alimony"
						content="Do you think you pay too much child support or Alimony? Or do you think you’re not getting enough? Well, you came to the right place. "
					/>
				</div>
			</section>
			<section className={styles.sectionFour} id="section">
				<div
					className={`${styles.col} ${styles.colOne}`}
					style={{
						backgroundImage: `url(${eltonAndEricPhotoUrl})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "top",
					}}
				></div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<div className={styles.textContainer}>
						<h3>Why Choose Us</h3>
						<hr />
						<span>Honest, Expert Lawyers</span>
						<p>
							Whether you are facing criminal charges or having trouble with
							family law related issues, our team of expert lawyers can help.
						</p>
						<span>Modern Legal Care</span>
						<p>
							Oftentimes you see law firms using traditional business practices.
							Our firm is moving into the future, we take advantage of
							modern-day technology to get the best possible outcome for you.
						</p>
						<span>Over 900 Cases Won</span>
						<p>
							When Elton started his law career, he began on the other side of
							the coin, prosecution. After that he worked as a public defender.
							Using all this knowledge, Elton has won over ~~~~ felony and
							misdemeanor cases.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionFive}>
				<div className={`${styles.row} ${styles.rowOne}`}>
					<h3>Our Philosophy</h3>
					<hr />
				</div>
				<div className={`${styles.row} ${styles.rowTwo}`}>
					<PracticeBlurb
						icon="1"
						heading="Our Clients Come First"
						content="We put forth a Client-First attitude, meaning that all of our decision are based on what is best for our client."
						iconColor="var(--color-black)"
						alignItems="flex-start"
						textAlign="left"
						flexBasis="var(--sizing-xxxl)"
					/>
					<PracticeBlurb
						icon="2"
						heading="Honest Communication"
						content="We believe that communication can make or break a case. That’s why no matter what the time is, you can message us securely over MyCase."
						iconColor="var(--color-black)"
						alignItems="flex-start"
						textAlign="left"
						flexBasis="var(--sizing-xxxl)"
					/>
					<PracticeBlurb
						icon="3"
						heading="Committed to Excellence"
						content="Along with our Client-First attitude and Honest Communication, we are committed to excellence. Every single detail of the case is looked over carefully and our decisions are reviewed many times."
						iconColor="var(--color-black)"
						alignItems="flex-start"
						textAlign="left"
						flexBasis="var(--sizing-xxxl)"
					/>
				</div>
			</section>
			<section className={styles.sectionSix}>
				<div className={`${styles.col} ${styles.colOne}`}>
					<h3>Let’s Work Together</h3>
				</div>
				<div className={`${styles.col} ${styles.colTwo}`}>
					<ButtonPrimary href="/contact">Get in Touch</ButtonPrimary>
				</div>
			</section>
		</>
	);
}
