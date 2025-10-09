import Divider from '@mui/material/Divider';
import React from "react";
import { Typography, type TypographyOwnProps } from "@mui/material";

export const lorumIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at pretium elit. Praesent volutpat dolor a elit imperdiet consequat. Curabitur a feugiat leo, sed pharetra massa. In quis mi ipsum. Donec mauris erat, ornare pellentesque eros a, volutpat lobortis tortor. Nam viverra dolor at vehicula dignissim. Donec bibendum, lacus id rhoncus fermentum, purus leo ultrices augue, et sollicitudin tellus neque quis mi. Mauris non leo ut ligula scelerisque vestibulum. Phasellus facilisis ex ex, tempor egestas enim consequat ac. Quisque aliquet fringilla lacus, ut facilisis leo vehicula sed. Donec eu dolor eget ex porttitor ullamcorper finibus nec justo. Morbi faucibus vehicula neque et luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Etiam et faucibus enim, in commodo urna. Maecenas commodo turpis purus, sed elementum diam pretium in.
Aliquam sed egestas lectus. Morbi tempor purus ex, cursus eleifend ante vehicula et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ipsum enim, tristique et rhoncus vitae, interdum sit amet ante. Aliquam lobortis tincidunt ultrices. Donec finibus sodales volutpat. Vestibulum sed dapibus augue, vitae iaculis ipsum.
Aenean at nisi at nisl lobortis commodo vel vitae ligula. Aliquam ultricies viverra ornare. Nullam egestas lacus at augue placerat tempor. Vivamus eget iaculis lacus. Nulla ultricies efficitur est, vitae vulputate dolor egestas vitae. Suspendisse at hendrerit sapien, eleifend sodales ipsum. Cras pulvinar rutrum posuere.
Proin id tortor ac leo molestie pellentesque. Curabitur id orci mauris. Vestibulum tincidunt risus et nisl sollicitudin suscipit. Cras id luctus velit. Mauris luctus elit sit amet lobortis hendrerit. Nullam mattis ullamcorper ex. Sed tellus est, pretium a tortor sed, imperdiet ornare magna. Suspendisse consequat, arcu quis hendrerit mollis, justo nulla pharetra quam, a convallis magna risus ut turpis. Integer eget vulputate nulla.
Suspendisse potenti. Donec eu nibh sit amet est ornare fermentum vel ut turpis. Donec egestas mauris quis egestas ultricies. Duis lobortis lobortis dolor. Etiam faucibus gravida porttitor. Curabitur orci ex, tincidunt non ante nec, lacinia luctus justo. Aenean convallis pharetra lacus, in cursus elit blandit ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu fermentum mi, at iaculis turpis. Integer vitae tortor erat. Cras feugiat varius fringilla.`;


type Variant = Pick<TypographyOwnProps, "variant">;
type DocumentationProps = { children?: React.ReactNode[] | React.ReactNode } & Variant

export function DocumentationHeader({ children, variant = 'h4' }: DocumentationProps) {
    return (
        <>
            <Typography variant={variant}> {children}</Typography >
            <Divider></Divider>
        </>
    );
}

export function DocumentationSubHeader({ children, variant = 'h5' }: DocumentationProps) {
    return (
        <>
            <Divider></Divider>
            <Typography variant={variant} sx={{
                py: 1
            }}> {children}</Typography >
            <Divider></Divider>
        </>);
}

export function DocumentationBody({ children }: { children?: React.ReactNode[] | React.ReactNode }) {
    return (<Typography variant="body1" sx={{
        py: 1
    }}>
        {children}
    </Typography>);
}

export function DocumentationSubBody({ children }: { children?: React.ReactNode[] | React.ReactNode }) {
    return (<Typography variant="body2" sx={{
        py: 1
    }}>
        {children}
    </Typography>);
}