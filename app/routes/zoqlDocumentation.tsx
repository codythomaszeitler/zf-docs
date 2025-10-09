import Box from "@mui/material/Box";
import { DocumentationBody, DocumentationHeader, DocumentationSubBody, DocumentationSubHeader, lorumIpsumText } from "./utils";

export default function ZoqlDocumentation() {
	return (<Box>
		<DocumentationHeader>
			Zoql
		</DocumentationHeader>
		<DocumentationBody>
			{lorumIpsumText}
		</DocumentationBody>
		<DocumentationSubHeader>
			Create Zoql Script
		</DocumentationSubHeader>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
		<DocumentationSubHeader>
			Soql Intellisense [BETA]
		</DocumentationSubHeader>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
	</Box>);

}