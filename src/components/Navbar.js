import { fetchData } from "@/src/api/server";
import { LeftNavItems, RightNavItems, MediaQuery } from "../api/queries";
import Link from "next/link";
import styles from "@/src/styles/components/Navbar.module.css";
import Image from "next/image";
import urlBuilder from "../utils/imageUrl";
import { IoIosArrowForward } from "react-icons/io";


export default async function Navbar() {
	const leftNav = (await fetchData(LeftNavItems)).data.renderNavigation;
	const rightNav = (await fetchData(RightNavItems)).data.renderNavigation;
	const logo = (
		await fetchData(MediaQuery, {
			uploadFileId: 6,
		})
	).data.uploadFile.data;


	return (
		<ul className={styles.navContainer}>
			{leftNav.map((item) => (
				<li key={item.id} className={`${styles.menuItem}`}>
					<Link href={item.path}>{item.title}</Link>

					{item.title === "Our Team" && (
						<>
							<IoIosArrowForward />
							<ul className={styles.submenu}>
								{item.items.map((subitem) => (
									<li key={subitem.title} className={styles.subItem}>
										<Link href={subitem.path}>{subitem.title}</Link>
									</li>
								))}
							</ul>
						</>
					)}
					{item.title === "Practice Areas" && (
						<>
							<IoIosArrowForward />
							<ul className={styles.submenu}>
								{item.items.map((subitem) => (
									<li key={subitem.title} className={styles.subItem}>
										<Link href={subitem.path}>{subitem.title}</Link>
									</li>
								))}
							</ul>
						</>
					)}
				</li>
			))}
			<li className={`${styles.menuItem} ${styles.menuItemLogo}`}>
				<div className={styles.logoWrapper}>
					<Image
						src={urlBuilder(`${logo.attributes.url}`)}
						alt={logo.attributes.alternativeText}
						fill
					/>
				</div>
			</li>

			{rightNav.map((item) => (
				<li key={item.id} className={`${styles.menuItem}`}>
					<Link href={item.path}>{item.title}</Link>
					{item.title === "Blog" && (
						<>
							<IoIosArrowForward />
							<ul className={styles.submenu}>
								{item.items.map((subitem) => (
									<li key={subitem.title} className={styles.subItem}>
										<Link href={subitem.path}>{subitem.title}</Link>
									</li>
								))}
							</ul>
						</>
					)}
				</li>
			))}
		</ul>
	);
}
