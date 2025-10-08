import { Typography, type TypographyOwnProps } from "@mui/material";
import Box from "@mui/material/Box";

import Divider from '@mui/material/Divider';
import React from "react";

/*
    We are going to have sections on the right side that correlate to the 
    right side. 

    We are trying to find some way to consistently apply the padding around a line.


    For example - should there be a react element that does this 
    or should it be a class style that is applied.
*/

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <DocumentationHeader>
                Deployments
            </DocumentationHeader>
            <Divider></Divider>
            <DocumentationBody>
                This is our explanation of how deployments work.
                This is going to be a very, very, very long message.
            </DocumentationBody>
            <Divider></Divider>
            <DocumentationSubHeader>
                Deploy on Save
            </DocumentationSubHeader>
            <Divider></Divider>
        </Box>
    );
}

type Variant = Pick<TypographyOwnProps, "variant">;
type DocumentationProps = { children?: React.ReactNode[] | React.ReactNode } & Variant

function DocumentationHeader({ children, variant = 'h4' }: DocumentationProps) {
    return (<Typography variant={variant}> {children}</Typography >);
}

function DocumentationSubHeader({ children, variant = 'h5' }: DocumentationProps) {
    return (<Typography variant={variant}> {children}</Typography >);
}

function DocumentationBody({ children }: { children?: React.ReactNode[] | React.ReactNode }) {
    return (<Typography variant="body2" sx={{
        py: 1
    }}>
        {children}
    </Typography>);
}

function LineDivider() {
    return (
        <Divider sx={{
            marginBottom: 10
        }}></Divider>
    );
}