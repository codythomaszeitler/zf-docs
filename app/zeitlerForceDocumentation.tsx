import { ZeitlerForceNavigation } from "./navigation";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import { createContext } from 'react';
import { useMediaContext, type MediaContextType } from "./mediaContext";

export interface ZeitlerForceDocumentationContextType {
    useMediaContext: () => MediaContextType;
};

export const ZeitlerForceDocumentationContext = createContext<ZeitlerForceDocumentationContextType>({
    useMediaContext: useMediaContext
});

export type ZeitlerForceDocumentationProps = {
    context?: ZeitlerForceDocumentationContextType;
}

export function ZeitlerForceDocumentation() {
    return (
        <ThemeProvider theme={theme}>
            <ZeitlerForceNavigation></ZeitlerForceNavigation>
        </ThemeProvider>
    );
}