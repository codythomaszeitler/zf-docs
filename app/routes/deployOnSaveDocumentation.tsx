import Box from "@mui/material/Box";

import { DocumentationBody, DocumentationHeader, DocumentationSubBody, DocumentationSubHeader, lorumIpsumText } from "./utils";

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <DocumentationHeader>
                Deployments
            </DocumentationHeader>
            <DocumentationBody>
                {lorumIpsumText}
            </DocumentationBody>
            <DocumentationSubHeader>
                Deploy on Save
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

