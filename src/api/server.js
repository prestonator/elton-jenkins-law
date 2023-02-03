export const fetchData = async (query, variables) => {
	try {
		const res = await fetch("https://strapi.prestonator.com/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		});
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return await res.json();
	} catch (error) {
		return console.log(error);
	}
};
