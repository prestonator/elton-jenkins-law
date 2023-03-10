import React from "react";
import Image from "next/image";
import styles from "@/src/styles/components/StaffPreview.module.css";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import ButtonPrimary from "@/src/components/PrimaryButton";

const StaffPreview = (props) => {
	const containerClassName = props.isEven ? styles.even : styles.odd;
	const isLastItem = props.index === props.totalItems - 1;
	const shouldRenderDivider = !isLastItem;

	// Define a custom list item component that includes the icon
	const CustomListItem = ({ children }) => {
		// Check if the list item contains a link
		const containsLink = React.Children.toArray(children).some(
			(child) => child.type === "a"
		);

		// Render an icon if the list item contains a link
		if (containsLink) {
			return (
				<li>
					{children}
					<FiExternalLink className={styles.listIcon} />
				</li>
			);
		} else {
			return <li>{children}</li>;
		}
	};

	// Define a custom component for the blockquote element
	const StaffPreviewBlockquote = ({ children }) => {
		return (
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
	};

	return (
		<>
			<div className={`${styles.staffPreviewContainer} ${containerClassName}`}>
				<div className={`${styles.colOne} ${containerClassName}`}>
					<div className={styles.iconContainer}>
						{props.socialIcons.map((icon) => (
							<a key={icon.href} href={icon.href}>
								{icon.icon === "Twitter" ? (
									<FaTwitterSquare className={styles.icon} />
								) : icon.icon === "Facebook" ? (
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
				</div>
				<div className={`${styles.content} ${containerClassName}`}>
					<ReactMarkdown
						components={{
							li: CustomListItem,
							blockquote: StaffPreviewBlockquote,
						}}
					>
						{props.info}
					</ReactMarkdown>
				</div>
			</div>
			{shouldRenderDivider && <hr className={`${styles.divider}`} />}
		</>
	);
};

export default StaffPreview;
