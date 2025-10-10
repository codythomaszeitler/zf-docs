import { Box } from "@mui/material";
import { DocumentationBody, DocumentationHeader, lorumIpsumText } from "./utils";

export default function Dashboard() {
	return (
		<Box data-testid='dashboard-screen'>
			<DocumentationHeader label="ZeitlerForce - An Introduction"/>
			<DocumentationBody>
				{lorumIpsumText}
			</DocumentationBody>
		</Box>
	);
}