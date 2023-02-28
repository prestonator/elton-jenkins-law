import React from "react";
import styles from "@/src/Form/styles.module.css";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	//checkbox: yup.boolean().required(),
});

export default function ConfirmPurchase({ formStep, nextFormStep }) {
	const { setFormValues } = useFormData();

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const onSubmit = (values) => {
		setFormValues(values);
		nextFormStep();
	};

	return (
		<div className={formStep === 2 ? styles.showForm : styles.hideForm}>
			<h2>Confirm Purchase</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formRow}>
					<input
						type="datetime-local"
						placeholder="Pick a date and time"
						{...register("Pick a date and time", { required: true })}
					/>
					<input
						type="checkbox"
						placeholder="Have you consulted with another firm about this matter?"
						{...register(
							"Have you consulted with another firm about this matter?",
							{ required: true }
						)}
					/>
					<select
						{...register("How did you hear about our firm?", {
							required: true,
						})}
					>
						<option value="Advertisement">Advertisement</option>
						<option value="Search Result">Search Result</option>
						<option value="Social Media">Social Media</option>
						<option value="Previous Client">Previous Client</option>
						<option value="Referral">Referral</option>
						<option value="Other (Please Specify)">
							Other (Please Specify)
						</option>
					</select>
				</div>
				<button>Next</button>
			</form>
		</div>
	);
}
