const formatDate = (date) => {
	const rawDate = new Date(date);

	const month = rawDate.toLocaleString("default", { month: "long" });
	const day = rawDate.getDate();
	const year = rawDate.getFullYear();
	const ordinal =
		day === 1 || day === 21 || day === 31
			? "st"
			: day === 2 || day === 22
			? "nd"
			: day === 3 || day === 23
			? "rd"
			: "th";
	const formattedDate = `${month} ${day}${ordinal}, ${year}`;

	return formattedDate;
};

export default formatDate;