import { Box } from "@mui/material";
import { DocumentationBody, DocumentationHeader, lorumIpsumText } from "./utils";

export default function Dashboard() {
	return (
		<Box data-testid='dashboard-screen'>

			<DocumentationHeader>
				ZeitlerForce - An Introduction
			</DocumentationHeader>
			<DocumentationBody>
				{lorumIpsumText}
			</DocumentationBody>
		</Box>
	);
}