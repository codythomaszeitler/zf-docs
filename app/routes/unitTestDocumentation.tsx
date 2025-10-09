import Box from "@mui/material/Box";
import { DocumentationHeader, DocumentationBody, lorumIpsumText, DocumentationSubHeader, DocumentationSubBody } from "./utils";

export function UnitTestDocumentation() {
	return (<Box>
		<DocumentationHeader>
			Unit Tests
		</DocumentationHeader>
		<DocumentationBody>
			{lorumIpsumText}
		</DocumentationBody>
		<DocumentationSubHeader>
            Run Unit Tests
		</DocumentationSubHeader>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
	</Box>);
}