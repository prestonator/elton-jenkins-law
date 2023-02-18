"use client";
import React from "react";
import styles from "@/src/styles/components/FlipCard.module.css";
import ButtonPrimary from "./PrimaryButton";

const FlipCard = (props) => {
	const [flipped, setFlipped] = React.useState(false);

	const flip = () => {
		setFlipped(!flipped);
	};

	return (
		<div
			onMouseEnter={flip}
			onMouseLeave={flip}
			className={styles.cardContainer + (flipped ? ` ${styles.flipped}` : "")}
		>
			<div className={`${styles.container}`}>
				<div
					className={`${styles.front}`}
					style={{
						backgroundImage: `url(${props.image})`,
					}}
				>
					<div className={`${styles.inner}`}>
						<p>{props.title}</p>
						<hr />
						<span>{props.excerpt}</span>
					</div>
				</div>
				<div className={`${styles.back}`}>
					<div className={`${styles.inner}`}>
						<p>{props.content}</p>
						<ButtonPrimary href={props.href}>Learn More</ButtonPrimary>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
