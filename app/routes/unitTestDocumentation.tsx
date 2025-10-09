import Box from "@mui/material/Box";
import { DocumentationHeader, DocumentationBody, lorumIpsumText, DocumentationSubHeader, DocumentationSubBody } from "./utils";

export function UnitTestDocumentation() {
	return (<Box>
		<DocumentationHeader label="Unit Tests"/>
		<DocumentationBody>
			{lorumIpsumText}
		</DocumentationBody>
		<DocumentationSubHeader label="Run Unit Tests"/>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
	</Box>);
}