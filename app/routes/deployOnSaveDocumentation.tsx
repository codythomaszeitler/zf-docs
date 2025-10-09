import Box from "@mui/material/Box";

import { DocumentationBody, DocumentationHeader, DocumentationSubBody, DocumentationSubHeader, lorumIpsumText } from "./utils";


export const deployOnSaveHeader = 'Deploy on Save';

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <DocumentationHeader>
                Deployments
            </DocumentationHeader>
            <DocumentationBody>
                {lorumIpsumText}
            </DocumentationBody>
            <DocumentationSubHeader id="Deploy on Save">
                {deployOnSaveHeader}
            </DocumentationSubHeader>
            <DocumentationSubBody>
                {lorumIpsumText}
            </DocumentationSubBody>
            <DocumentationSubHeader>
                Deploy Folder
            </DocumentationSubHeader>
            <DocumentationSubBody>
                <p>
                    {lorumIpsumText}
                </p>
                <p>
                    {lorumIpsumText}
                </p>
            </DocumentationSubBody>
            <DocumentationSubHeader>See Errors</DocumentationSubHeader>
            <DocumentationSubBody>
                {lorumIpsumText}
            </DocumentationSubBody>
        </Box>
    );
}

