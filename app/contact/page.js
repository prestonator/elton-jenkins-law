import styles from "@/src/styles/pages/Contact.module.css";
import Scheduler from "@/src/components/Schedule";
import { GrContactInfo, GrMap } from "react-icons/gr";
import {
	AiOutlineClockCircle,
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillYoutube,
} from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import ButtonPrimary from "@/src/components/PrimaryButton";

export default async function Page() {
	return (
		<>
			<section className={styles.sectionOne}>
				<iframe
					src="https://snazzymaps.com/embed/460868"
					style={{ border: "none" }}
				></iframe>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<Scheduler />
				</div>
				<div className={styles.col}>
					<div className={styles.row}>
						<div className={styles.iconWrapper}>
							<GrMap />
						</div>
						<div className={styles.textContainer}>
							<span>MEET WITH US</span>
							<p>124 East Main Street</p>
							<p>Norman, OK 73069</p>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.iconWrapper}>
							<GrContactInfo />
						</div>
						<div className={styles.textContainer}>
							<span>GET IN CONTACT</span>
							<p>elton@eltonjenkinslaw.com</p>
							<p>+1 (405) 217-3623</p>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.iconWrapper}>
							<AiOutlineClockCircle />
						</div>
						<div className={styles.textContainer}>
							<span>OPEN HOURS</span>
							<p>M-F: 8am – 5pm</p>
							<p>Sat: By Appt.</p>
							<p>Sun: By Appt.</p>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.col}>
					<div className={styles.textContainer}>
						<span>FREE CONSULT</span>
						<h3>Set Up a Free Consultation Today!</h3>
						<hr />
						<p>
							It’s hard to find a great attorney, but we’ll make this process
							like taking candy from a baby! Look no further! We are the law
							firm for the people. Everything will go smooth, some might say
							even smoother than what they had conceptualized.
						</p>
						<ButtonPrimary href="/">More Info</ButtonPrimary>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.iconWrapper}>
						<BsTelephoneOutbound />
					</div>
				</div>
			</section>
			<section className={styles.sectionFour}>
				<div className={styles.col}>
					<div className={styles.row}>
						<AiFillFacebook />
						<AiFillTwitterSquare />
					</div>
					<div className={styles.row}>
						<AiFillLinkedin />
						<AiFillYoutube />
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.textContainer}>
						<span>OR FIND US ON SOCIAL MEDIA!</span>
						<hr />
						<p>
							If you would like to stay updated on what the firm is doing, take
							a look at us on Facebook, Twitter, or Google! We post updates on
							the firm and our blog posts too.
						</p>
						<ButtonPrimary href="/">More Info</ButtonPrimary>
					</div>
				</div>
			</section>
		</>
	);
}
