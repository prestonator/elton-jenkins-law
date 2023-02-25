"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ReactFormTest() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [data, setData] = useState("");

	const onSubmit = (data) => {
		setData(data);
	};

	return (
		<>
			<div>
				<h1>React-hook-forms testing</h1>
			</div>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Full Name"
						{...register("Full Name", {
							required: true,
							min: 2,
							maxLength: 60,
						})}
					/>
					<input
						type="email"
						placeholder="Email Address"
						{...register("Email Address", { required: true })}
					/>
					<input
						type="tel"
						placeholder="Phone Number"
						{...register("Phone Number", { required: true })}
					/>
					<input
						type="checkbox"
						placeholder="Type of legal issue (Choose at least 1)"
						{...register("Type of legal issue (Choose at least 1)", {
							required: true,
						})}
					/>
					<textarea
						{...register("Brief description of your legal issue", {
							required: true,
							min: 5,
						})}
					/>
					<input
						type="checkbox"
						placeholder="Attorney preference."
						{...register("Attorney preference.", {})}
					/>
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
					<input
						type="checkbox"
						placeholder="How did you hear about our firm?"
						{...register("How did you hear about our firm?", {
							required: true,
						})}
					/>

					<input type="submit" />
				</form>
			</div>
			<div>
				<h2>Form Data</h2>
				<p>{JSON.stringify(data)}</p>
			</div>
		</>
	);
}
