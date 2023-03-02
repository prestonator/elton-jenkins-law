"use client";
import { useState } from "react";
import styles from "@/src/Form/styles.module.css";
import FormCard from "@/src/Form/components/FormCard";
import FormSteps from "@/src/Form/components/FormSteps";

const MultiStepForm = () => {
	const [formStep, setFormStep] = useState(0);

	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

	const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

	const CurrentFormStep = FormSteps[formStep].component;

	return (
		<div className={styles.container}>
			<h1>Schedule a Consultation Today!</h1>
			<FormCard
				className={styles.formCard}
				currentStep={formStep}
				prevFormStep={prevFormStep}
			>
				<CurrentFormStep
					formStep={formStep}
					nextFormStep={nextFormStep}
					className={styles.formStep}
				/>
			</FormCard>
		</div>
	);
};

export default MultiStepForm;
