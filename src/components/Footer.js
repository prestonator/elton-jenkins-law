import React from "react";
import styles from "@/src/styles/components/Footer.module.css";
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineLinkedin,
} from "react-icons/ai";
import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import urlBuilder from "../utils/imageUrl";
import Scheduler from "./Schedule";

export default async function Footer() {
	const mapData = await getMediaData(22);
	const mapUrl = urlBuilder(mapData.attributes.url);
	return (
		<footer>
			<div
				className={styles.scheduleWrapper}
				style={{
					backgroundImage: `url(${mapUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
					width: "100%",
				}}
			>
				<div className={styles.scheduleContainer}>
					<Scheduler />
					<div className={styles.textContainer}>
						<div className={styles.textContent}>
							<span>124 EAST MAIN STREET,</span>
							<span>NORMAN, OK 73069</span>
							<span>+1 405 217 3623</span>
							<span>ELTON@ELTONJENKINSLAW.COM</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footerWrapper}>
				<div className={styles.footerContainer}>
					<div className={`${styles.col}`}>
						<h3>Staff</h3>
						<hr />
						<span>Elton Jenkins</span>
						<span>Eric Kroier</span>
						<span>Greg Milstead</span>
						<span>View All Staff</span>
					</div>
					<div className={`${styles.col}`}>
						<h3>Practice Areas</h3>
						<hr />
						<span>Criminal Defense</span>
						<span>Family Law</span>
						<span>Personal Injury</span>
						<span>View All Practice Areas</span>
					</div>
					<div className={`${styles.col}`}>
						<h3>Helpful Pages</h3>
						<hr />
						<span>Home</span>
						<span>About</span>
						<span>Blog</span>
						<span>Contact Us</span>
					</div>
					<div className={`${styles.col} ${styles.contactCol}`}>
						<div className={`${styles.row} ${styles.rowOne}`}>
							<AiOutlineFacebook />
							<AiOutlineInstagram />
							<AiOutlineTwitter />
							<AiOutlineLinkedin />
						</div>
						<div className={`${styles.row} ${styles.rowTwo}`}>
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Email" />
							<input type="text" placeholder="Phone" />
							<input type="submit" value="Submit" />
						</div>
						<div className={`${styles.row} ${styles.rowThree}`}>
							Copyright ©2023 | All Rights Reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
