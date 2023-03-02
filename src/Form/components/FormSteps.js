import StepOne from "./Forms/StepOne";
import StepTwo from "./Forms/StepTwo";
import StepThree from "./Forms/StepThree";
import StepFour from "./Forms/StepFour";
import StepFive from "./Forms/StepFive";

const FormSteps = [
	{
		name: "Contact Information",
		component: StepOne,
	},
	{
		name: "Billing Info",
		component: StepTwo,
	},
	{
		name: "Confirm Purchase",
		component: StepThree,
	},
	{
		name: "Step Four",
		component: StepFour,
	},
	{
		name: "Review and Submit",
		component: StepFive,
	},
];

export default FormSteps;
