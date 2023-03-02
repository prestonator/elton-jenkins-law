// Form/components/FormCard.js
import styles from "@/src/Form/styles.module.css";

export default function FormCard({ children, currentStep, prevFormStep, totalSteps }) {
	return (
		<div className={styles.formCard}>
			{currentStep < totalSteps - 1 && (
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

					<span className={styles.steps}>Step {currentStep + 1} of {totalSteps}</span>
				</>
			)}

			{children}
		</div>
	);
}
