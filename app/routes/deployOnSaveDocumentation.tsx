import Box from "@mui/material/Box";

import { DocumentationBody, DocumentationHeader, DocumentationSubBody, DocumentationSubHeader, lorumIpsumText } from "./utils";

export const deployOnSaveHeader = 'Deploy on Save';
export const deployFolderHeader = 'Deploy Folder';
export const seeErrorsHeader = 'See Errors';

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <DocumentationHeader label="Deployments">
            </DocumentationHeader>
            <DocumentationBody>
                {lorumIpsumText}
            </DocumentationBody>
            <DocumentationSubHeader label={deployOnSaveHeader}>
            </DocumentationSubHeader>
            <DocumentationSubBody>
                {lorumIpsumText}
            </DocumentationSubBody>
            <DocumentationSubHeader label={deployFolderHeader}>
            </DocumentationSubHeader>
            <DocumentationSubBody>
                <div>
                    {lorumIpsumText}
                </div>
                <div>
                    {lorumIpsumText}
                </div>
            </DocumentationSubBody>
            <DocumentationSubHeader label={seeErrorsHeader}></DocumentationSubHeader>
            <DocumentationSubBody>
                {lorumIpsumText}
            </DocumentationSubBody>
        </Box>
    );
}

