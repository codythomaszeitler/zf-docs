import Box from "@mui/material/Box";
import { DocumentationHeader, DocumentationBody, lorumIpsumText, DocumentationSubHeader, DocumentationSubBody } from "./utils";

export function LogsDocumentation() {
	return (<Box>
		<DocumentationHeader label="Logs" />
		<DocumentationBody>
			{lorumIpsumText}
		</DocumentationBody>
		<DocumentationSubHeader label="Enable Debug Logging" />
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
		<DocumentationSubHeader label="View Debugs" />
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
		<DocumentationSubHeader label="Refresh Debug Logs" />
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
	</Box>);
}