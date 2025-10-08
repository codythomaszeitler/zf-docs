import { Typography, type TypographyOwnProps } from "@mui/material";
import Box from "@mui/material/Box";

import Divider from '@mui/material/Divider';
import React from "react";

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <DocumentationHeader>
                Deployments
            </DocumentationHeader>
            <DocumentationBody>
                This is our explanation of how deployments work.
                This is going to be a very, very, very long message.
            </DocumentationBody>
            <DocumentationSubHeader>
                Deploy on Save
            </DocumentationSubHeader>
            <DocumentationSubBody>
                This is going to be the explanation of how deploy on save works.
                For example, we are going to show how it queues up deployments.
            </DocumentationSubBody>
            <DocumentationSubHeader>
                Deploy Folder
            </DocumentationSubHeader>
            <DocumentationSubBody>
                <p>
                    This is going to be an explanation of how deploying a folder is going to work.
                    For example, we are are going to show how it can show errors.

                </p>
                <p>
                    To elaborate more on this, you can click on an error and it can show you the exact
                    location of where that error is.
                </p>
            </DocumentationSubBody>
            <DocumentationSubHeader>See Errors</DocumentationSubHeader>
            <DocumentationSubBody>
                This is the location where we are going to discuss how to navigate to errors.
            </DocumentationSubBody>
        </Box>
    );
}

type Variant = Pick<TypographyOwnProps, "variant">;
type DocumentationProps = { children?: React.ReactNode[] | React.ReactNode } & Variant

function DocumentationHeader({ children, variant = 'h4' }: DocumentationProps) {
    return (
        <>
            <Typography variant={variant}> {children}</Typography >
            <Divider></Divider>
        </>
    );
}

function DocumentationSubHeader({ children, variant = 'h5' }: DocumentationProps) {
    return (
        <>
            <Divider></Divider>
            <Typography variant={variant} sx={{
                py: 1
            }}> {children}</Typography >
            <Divider></Divider>
        </>);
}

function DocumentationBody({ children }: { children?: React.ReactNode[] | React.ReactNode }) {
    return (<Typography variant="body1" sx={{
        py: 1
    }}>
        {children}
    </Typography>);
}

function DocumentationSubBody({ children }: { children?: React.ReactNode[] | React.ReactNode }) {
    return (<Typography variant="body2" sx={{
        py: 1
    }}>
        {children}
    </Typography>);
}