"use client";
import styles from "@/src/styles/components/Navbar.module.css";
import React, { useState, useEffect } from "react";
import { debounce } from "@/src/utils/debounce";


export default function RenderNav({ children }) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
		position: "fixed",
		height: "auto",
		width: "100%",
		transition: "top 0.5s ease",
		zIndex: "100",
	};

	return <nav className={styles.navWrapper} style={{ ...navbarStyles, top: visible ? "0" : "-150px" }}>{children}</nav>;
}
