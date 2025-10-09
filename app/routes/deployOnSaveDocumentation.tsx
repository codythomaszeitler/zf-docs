import { Typography, type TypographyOwnProps } from "@mui/material";
import Box from "@mui/material/Box";

import Divider from '@mui/material/Divider';
import React from "react";

import { lorumIpsumText } from "./utils";

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