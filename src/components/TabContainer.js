"use client";
// TabbedContainer.js
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/src/styles/components/TabContainer.module.css";

// Component for a basic tabbed container
const TabbedContainer = (props) => {
	// Set the initial tab to 1
	const [activeTab, setActiveTab] = useState(1);

	// Handle tab selection
	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	// Component lifecycle hook
	useEffect(() => {
		// Get the tab from props and set it as active
		let tab = props.tab;
		setActiveTab(tab);
	}, [props.tab]);

	// Render the tabbed container
	return (
		<div className={styles.tabContainer}>
			{/* Tabs at the top */}
			<ul className={styles.tabLinks}>
				{/* Tab 1 */}
				<li>
					<button
						onClick={() => handleTabChange(1)}
						className={
							activeTab === 1
								? `${styles.active} ${styles.singleLink}`
								: styles.singleLink
						}
					>
						<span className={styles.linkText}>{props.tabOne}</span>
					</button>
				</li>
				{/* Tab 2 */}
				<li>
					<button
						onClick={() => handleTabChange(2)}
						className={
							activeTab === 2
								? `${styles.active} ${styles.singleLink}`
								: styles.singleLink
						}
					>
						<span className={styles.linkText}>{props.tabTwo}</span>
					</button>
				</li>
				{/* Tab 3 */}
				<li>
					<button
						onClick={() => handleTabChange(3)}
						className={
							activeTab === 3
								? `${styles.active} ${styles.singleLink}`
								: styles.singleLink
						}
					>
						<span className={styles.linkText}>{props.tabThree}</span>
					</button>
				</li>
				{/* Tab 4 */}
				<li>
					<button
						onClick={() => handleTabChange(4)}
						className={
							activeTab === 4
								? `${styles.active} ${styles.singleLink}`
								: styles.singleLink
						}
					>
						<span className={styles.linkText}>{props.tabFour}</span>
					</button>
				</li>
			</ul>

			{/* Content for each tab */}
			<ul className={styles.tabContents}>
				{activeTab === 1 && (
					<li>
						<div
							className={
								activeTab === 1
									? `${styles.active} ${styles.insideContent}`
									: styles.insideContent
							}
						>
							<ReactMarkdown>{props.tab1Content}</ReactMarkdown>
						</div>
					</li>
				)}
				{activeTab === 2 && (
					<li>
						<div
							className={
								activeTab === 2
									? `${styles.active} ${styles.insideContent}`
									: styles.insideContent
							}
						>
							<ReactMarkdown>{props.tab2Content}</ReactMarkdown>
						</div>
					</li>
				)}
				{activeTab === 3 && (
					<li>
						<div
							className={
								activeTab === 3
									? `${styles.active} ${styles.insideContent}`
									: styles.insideContent
							}
						>
							<ReactMarkdown>{props.tab3Content}</ReactMarkdown>
						</div>
					</li>
				)}
				{activeTab === 4 && (
					<li>
						<div
							className={
								activeTab === 4
									? `${styles.active} ${styles.insideContent}`
									: styles.insideContent
							}
						>
							<ReactMarkdown>{props.tab4Content}</ReactMarkdown>
						</div>
					</li>
				)}
			</ul>
		</div>
	);
};

export default TabbedContainer;
