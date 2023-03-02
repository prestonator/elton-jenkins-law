// Form/components/Forms/StepFive.js
import { useFormData } from "@/src/Form/context";

export default function StepFive() {
	const { data } = useFormData();
	const dataString = JSON.stringify(data);
	const eventData = JSON.parse(dataString);

	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		// Get data from the form.
		const formData = {
			fullName: eventData.name,
			email: eventData.email,
			phone: eventData.phone,
			legalIssue: eventData.legalIssue,
			previousConsultation: eventData.previousConsultation,
			referral: eventData.referral,
			date: eventData.date,
		};

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(formData);

		// API endpoint where we send form data.
		const endpoint = "/api/formAPI";

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options);

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json();
		alert(`Is this your info: ${result.data}`);
	};

	return (
		<>
			<h3>Review and submit your form:</h3>
			<span>Name:</span>
			<p>{eventData.name}</p>
			<span>Email:</span>
			<p>{eventData.email}</p>
			<span>Phone:</span>
			<p>{eventData.phone}</p>
			<span>Legal Issue:</span>
			<p>{eventData.legalIssue}</p>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</>
	);
}
