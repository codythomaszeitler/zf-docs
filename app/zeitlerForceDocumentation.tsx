import { ZeitlerforceNavigation } from "./navigation";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import { createContext, useCallback, useContext } from 'react';
import { useMediaContext, type MediaContextType } from "./mediaContext";
import { get } from "http";

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
    const context = useContext(ZeitlerForceDocumentationContext);
    return (
        <ZeitlerForceDocumentationContext.Provider value={context}>
            <ThemeProvider theme={theme}>
                <ZeitlerforceNavigation></ZeitlerforceNavigation>
            </ThemeProvider>
        </ZeitlerForceDocumentationContext.Provider>
    );
}