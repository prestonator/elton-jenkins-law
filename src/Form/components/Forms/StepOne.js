// Form/components/Forms/StepOne.js
import React from "react";
import styles from "@/src/Form/styles.module.css";
import { useForm, Controller } from "react-hook-form";
import { useFormData } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const schema = yup.object().shape({
	email: yup.string().email().required(),
	name: yup.string().required(),
	phone: yup.string().required(),
});

export default function StepOne({ formStep, nextFormStep }) {
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

	return (
		<div className={formStep === 0 ? styles.showForm : styles.hideForm}>
			<h2>Contact Information</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formRow}>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						placeholder="Full Name"
						{...register("name", {
							required: true,
							min: 2,
							maxLength: 60,
						})}
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							required: true,
						})}
					/>
					{errors.email && (
						<p className={styles.errorText}>Email is required</p>
					)}

					<label htmlFor="phone">Primary Phone Number</label>
					<Controller
						name="phone"
						control={control}
						rules={{ required: true }}
						defaultValue=""
						render={({ field }) => {
							return (
								<PhoneInput
									{...field}
									placeholder={"Enter phone number"}
									inputProps={{
										name: field.name,
									}}
									country={"us"}
									onlyCountries={["us"]}
									onChange={(v) => field.onChange(v)}
								/>
							);
						}}
					/>
				</div>
				<button type="submit">Next</button>
			</form>
		</div>
	);
}
