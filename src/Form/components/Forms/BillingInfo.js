import styles from "@/src/Form/styles.module.css";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
	"legal-issue": yup.array().min(1),
});




export default function BillingInfo({ formStep, nextFormStep }) {
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
		<div className={formStep === 1 ? styles.showForm : styles.hideForm}>
			<h2>Billing Info</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formRow}>
					<label htmlFor="legal-issue">
						Type of legal issue (Choose at least 1)
					</label>
					<span>
						Criminal Law
						<input
							type="checkbox"
							{...register("legal-issue", { required: true })}
							value="Criminal Law"
						/>
					</span>
					<span>
						Family Law
						<input
							type="checkbox"
							{...register("legal-issue", { required: true })}
							value="Family Law"
						/>
					</span>
					<span>
						Personal Injury Law
						<input
							type="checkbox"
							{...register("legal-issue", { required: true })}
							value="Personal Injury Law"
						/>
					</span>
					<span>
						Other, Please Specify
						<input
							type="checkbox"
							{...register("legal-issue", { required: true })}
							value="Other, Please Specify"
						/>
					</span>
				</div>
				<button>Next</button>
			</form>
		</div>
	);
}
