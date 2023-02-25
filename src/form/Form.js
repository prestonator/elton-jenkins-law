"use client";
import { Box, Button, Title } from "@mantine/core";

function Form() {
	return (
		<Box sx={boxStyle}>
			<Title
				sx={{
					textAlign: "center",
				}}
				order={2}
			>
				Hey there!
			</Title>
			{/* Steps */}
			<Button>Submit</Button>
		</Box>
	);
}
export default Form;
