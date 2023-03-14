"use client";
// TabbedContainer.js
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/src/styles/components/Tabs.module.css";

const TabbedContainer = ({ tabs }) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	useEffect(() => {
		setActiveTabIndex(0);
	}, []);

	const handleTabClick = (rowIndex) => {
		setActiveTabIndex(rowIndex);
	};
	

	return (
		<div className={styles.tabContainer}>
			{/* Tab buttons */}
			<ul className={styles.tabLinks}>
				{tabs.map(({ title }, index) => (
					<li key={index}>
						<button
							onClick={() => handleTabClick(index)}
							className={`${styles.singleLink} ${
								activeTabIndex === index ? styles.active : ""
							}`}
						>
							<span className={styles.linkText} data-text={title}>
								{title}
							</span>
						</button>
					</li>
				))}
			</ul>

			{/* Tab content */}
			<ul className={styles.tabContents}>
				{tabs.map(
					({ content }, index) =>
						activeTabIndex === index && (
							<li key={index}>
								<div className={`${styles.insideContent} ${styles.active}`}>
									<ReactMarkdown>{content}</ReactMarkdown>
								</div>
							</li>
						)
				)}
			</ul>
		</div>
	);
};

export default TabbedContainer;
