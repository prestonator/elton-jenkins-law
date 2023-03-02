// Form/components/Forms/StepThree.js
import React, { useState } from "react";
import styles from "@/src/Form/styles.module.css";
import { useForm, Controller } from "react-hook-form";
import { useFormData } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { enGB } from "date-fns/locale";
import { addDays, isBefore } from "date-fns";

const schema = yup.object().shape({
	//checkbox: yup.boolean().required(),
});

export default function StepThree({ formStep, nextFormStep }) {
	const { setFormValues } = useFormData();
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const onSubmit = (values) => {
		setFormValues(values);
		nextFormStep();
	};

	const currentDate = new Date();
	const minSelectableDate = addDays(currentDate, 3);

	const disabledDays = {
		before: minSelectableDate,
	};

	const isDayDisabled = (day) => isBefore(day, minSelectableDate);

	return (
		<div className={formStep === 2 ? styles.showForm : styles.hideForm}>
			<h2>Confirm Purchase</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formRow}>
					<input
						type="checkbox"
						placeholder="Have you consulted with another firm about this matter?"
						{...register(
							"previousConsultation",
							{ required: true }
						)}
					/>
					<select
						{...register("referral", {
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
					<label htmlFor="date">Date</label>
					<Controller
						name="date"
						control={control}
						rules={{ required: true }}
						render={({ field: { onChange, value } }) => (
							<DayPicker
								selected={value}
								onDayClick={onChange}
								inputProps={{ required: true }}
								locale={enGB}
								showOutsideDays
								disabled={disabledDays}
								modifiers={{ disabled: isDayDisabled }}
							/>
						)}
					/>
				</div>
				<button>Next</button>
			</form>
		</div>
	);
}
