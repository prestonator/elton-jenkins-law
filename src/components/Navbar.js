import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import { getNavData } from "@/src/api/fetchData/fetchNavItems";
import Link from "next/link";
import styles from "@/src/styles/components/Navbar.module.css";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default async function Navbar() {
	const [logo] = await getMediaData([6]);
	const { fullUrl: logoUrl, altText: logoAlt } = logo;
	const leftNav = await getNavData("left-navigation");
	const rightNav = await getNavData("right-navigation");

	return (
		<ul className={styles.navContainer}>
			{leftNav.map((item) => (
				<li key={item.path} className={`${styles.menuItem}`}>
					{item.title === "Our Team" || item.title === "Practice Areas" ? (
						<span>{item.title}</span>
					) : (
						<Link href={item.path}>{item.title}</Link>
					)}
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
						src={logoUrl}
						alt={logoAlt}
						fill
						sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, auto"
					/>
				</div>
			</li>

			{rightNav.map((item) => (
				<li key={item.path} className={`${styles.menuItem}`}>
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
