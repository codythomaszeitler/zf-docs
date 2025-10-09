import Box from "@mui/material/Box";
import { DocumentationBody, DocumentationHeader, DocumentationSubBody, DocumentationSubHeader, lorumIpsumText } from "./utils";

export const createZoqlScriptHeader = 'Create Zoql Script';
export const soqlIntellisenseHeader = 'Soql Intellisense [BETA]';

export default function ZoqlDocumentation() {
	return (<Box>
		<DocumentationHeader label="Zoql"/>
		<DocumentationBody>
			{lorumIpsumText}
		</DocumentationBody>
		<DocumentationSubHeader label={createZoqlScriptHeader}/>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
		<DocumentationSubHeader label={soqlIntellisenseHeader}/>
		<DocumentationSubBody>
			{lorumIpsumText}
		</DocumentationSubBody>
	</Box>);

}