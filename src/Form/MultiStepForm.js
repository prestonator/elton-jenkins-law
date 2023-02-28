"use client";
import { useState } from "react";
import styles from "@/src/Form/styles.module.css";
import FormCard from "@/src/Form/components/FormCard";
import {
	BillingInfo,
	ConfirmPurchase,
	PersonalInfo,
} from "@/src/Form/components/Forms";
import FormCompleted from "@/src/Form/components/FormCompleted";

const MultiStepForm = () => {
	const [formStep, setFormStep] = useState(0);

	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

	const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

	return (
		<div className={styles.container}>
			<h1>Schedule a Consultation Today!</h1>
			<FormCard currentStep={formStep} prevFormStep={prevFormStep}>
				{formStep >= 0 && (
					<PersonalInfo formStep={formStep} nextFormStep={nextFormStep} className={styles.formStep} />
				)}
				{formStep >= 1 && (
					<BillingInfo formStep={formStep} nextFormStep={nextFormStep} className={styles.formStep} />
				)}
				{formStep >= 2 && (
					<ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} className={styles.formStep} />
				)}

				{formStep > 2 && <FormCompleted />}
			</FormCard>
		</div>
	);
};

export default MultiStepForm;
