"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/src/styles/components/StaffPreviewCard.module.css";

const TeamCardComponent = (props) => {
	const [showOverlay, setShowOverlay] = useState(false);

	const handleClick = () => {
		setShowOverlay(!showOverlay);
	};

	return (
		<div className={styles.staffCard} onClick={handleClick}>
			<div className={styles.staffCardImage}>
				<Image src={props.headshot} alt={props.alt} fill />
			</div>
			<div className={styles.staffCardContent}>
				<h2 className={styles.staffCardName}>{props.name}</h2>
				<p className={styles.staffCardPosition}>{props.position}</p>
			</div>
			<div
				className={`${styles.staffCardOverlay} ${
					showOverlay ? styles.active : ""
				}`}
			>
				<div className={styles.staffCardOverlayContent}>
					<h3 className={styles.staffCardBio}>{props.bio}</h3>
					<p className={styles.staffCardFunFact}>Get to Know {props.name}</p>
					<p className={styles.staffCardGetToKnow}>{props.email} | {props.phone}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamCardComponent;
