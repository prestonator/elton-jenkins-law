import { Box, Text, TextInput } from "@mantine/core";
function First() {
	return (
		<Box sx={boxStyle}>
			<Text>To start with, whats your beautiful name?</Text>
			<Box
				sx={{
					margin: "1rem 0",
				}}
			>
				<TextInput placeholder="John Doe" required />
			</Box>
		</Box>
	);
}
export default First;
