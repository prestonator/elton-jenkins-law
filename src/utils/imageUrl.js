const urlBuilder = (src) => {
	const strapiUrl = "https://strapi.prestonator.com";
	const fullUrl = strapiUrl + src;
	return fullUrl;
};

export default urlBuilder;
