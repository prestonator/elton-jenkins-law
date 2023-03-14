"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/src/styles/components/StaffPreviewCard.module.css";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import ButtonPrimary from "@/src/components/PrimaryButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StaffPreview = (props) => {
	const containerClassName = props.isEven ? styles.even : styles.odd;
	const isLastItem = props.index === props.totalItems - 1;
	const shouldRenderDivider = !isLastItem;

	// Define a custom list item component that includes the icon
	const CustomListItem = ({ children }) => (
		<li>
			{React.Children.toArray(children).some((child) => child.type === "a") && (
				<FiExternalLink className={styles.listIcon} />
			)}
			{children}
		</li>
	);

	// Define a custom component for the blockquote element
	const StaffPreviewBlockquote = ({ children }) => (
		<blockquote>
			{children}
			<ButtonPrimary
				href={props.button.href}
				position="absolute"
				btnWidth="100%"
			>
				{props.button.label}
			</ButtonPrimary>
		</blockquote>
	);

	// Determine the translateX value for the imageVariant
	const translateXValue = props.isEven ? "-100%" : "100%";

	const imageVariant = {
		visible: {
			translateX: "0%",
			opacity: 1,
			transition: { duration: 0.3, type: "ease" },
		},
		hidden: {
			opacity: 0,
			translateX: translateXValue,
		},
	};

	const textVariant = {
		visible: {
			translateX: "0%",
			opacity: 1,
			transition: { duration: 0.3, type: "ease" },
		},
		hidden: {
			opacity: 0,
			translateX: props.isEven ? "100%" : "-100%",
		},
	};

	const dividerVariant = {
		visible: {
			opacity: 1,
			transition: { duration: 0.3, type: "ease" },
		},
		hidden: { opacity: 0 },
	};

	const control = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		control.start(inView ? "visible" : "hidden");
	}, [control, inView]);

	return (
		<>
			<div
				ref={ref}
				className={`${styles.staffPreviewContainer} ${containerClassName}`}
			>
				<motion.div
					variants={imageVariant}
					initial="hidden"
					animate={control}
					className={`${styles.colOne} ${containerClassName}`}
				>
					<div className={styles.iconContainer}>
						{props.socialIcons.map(({ href, icon }) => (
							<a key={href} href={href}>
								{icon === "Twitter" ? (
									<FaTwitterSquare className={styles.icon} />
								) : icon === "Facebook" ? (
									<FaFacebookSquare className={styles.icon} />
								) : null}
							</a>
						))}
					</div>
					<div className={styles.avatarWrapper}>
						<Image
							className={styles.avatar}
							src={props.avatarUrl}
							alt={props.avatarAlt}
							fill
						/>
					</div>
				</motion.div>
				<motion.div
					variants={textVariant}
					initial="hidden"
					animate={control}
					className={`${styles.content} ${containerClassName}`}
				>
					<ReactMarkdown
						components={{
							li: CustomListItem,
							blockquote: StaffPreviewBlockquote,
						}}
					>
						{props.info}
					</ReactMarkdown>
				</motion.div>
			</div>
			{shouldRenderDivider && (
				<motion.hr
					variants={dividerVariant}
					initial="hidden"
					animate={control}
					className={`${styles.divider}`}
				/>
			)}
		</>
	);
};

export default StaffPreview;
