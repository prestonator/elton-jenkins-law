export default function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body;

	// Optional logging to see the responses
	// in the command line where next.js app is running.
	console.log("body: ", body);

	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body.fullName || !body.email) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: "name or phone not found" });
	}

	// Found the name.
	// Sends a HTTP success code
	res.status(200).json({ data: `${body.fullName} ${body.email}` });

	// Trigger the webhook node in n8n.
	fetch("https://n8n.jenkinsremote.com/webhook/trigger-form-webhook", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ data: body }),
	})
		.then(() => {
			// Send a success response back to the client.
			res.status(200).json({ data: `${body.fullName} ${body.email}` });
		})
		.catch((error) => {
			console.log(error);
			// Send an error response back to the client.
			res.status(500).json({ data: "Error triggering webhook node." });
		});
}
