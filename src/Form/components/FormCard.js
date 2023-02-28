import styles from "@/src/Form/styles.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
	enter: (direction) => {
		return {
			x: direction === "next" ? "100%" : "-100%",
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction === "next" ? "-100%" : "100%",
			opacity: 0,
		};
	},
};

export default function FormCard({ children, currentStep, prevFormStep }) {
	const [direction, setDirection] = useState("");

	const handleTransition = (currentStep, nextStep) => {
		setDirection(currentStep < nextStep ? "next" : "prev");
	};

	return (
		<div className={styles.formCard}>
			{currentStep < 3 && (
				<>
					{currentStep > 0 && (
						<button
							className={styles.back}
							onClick={prevFormStep}
							type="button"
						>
							back
						</button>
					)}

					<span className={styles.steps}>Step {currentStep + 1} of 3</span>
				</>
			)}

			<AnimatePresence
				custom={direction}
				initial={false}
				mode='wait'
				onExitComplete={() => setDirection("")}
			>
				<motion.div
					className={styles.formWrapper}
					key={currentStep}
					variants={variants}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.4, ease: "easeInOut" }}
					onViewportBoxUpdate={(viewportBox) => {
						if (viewportBox.prevViewportBox) {
							handleTransition(
								viewportBox.prevViewportBox.key,
								viewportBox.current.key
							);
						}
					}}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
