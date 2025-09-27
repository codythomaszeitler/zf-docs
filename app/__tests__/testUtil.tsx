import { screen, type RenderResult } from "@testing-library/react";
import React from "react";

export { screen };

import { render as testingLibraryRender } from "@testing-library/react";
import type { ZeitlerForceDocumentationContextType } from "~/zeitlerForceDocumentation";
import { useContext } from "react";
import type { MediaContextType } from "~/mediaContext";

export function render(ui: React.ReactNode): RenderResult {
    return testingLibraryRender(ui);
}

export function isMobileMediaQuery() {
    return genUseMediaContext({ isMobile: true });
}

export function isDesktopMediaQuery() {
    return genUseMediaContext({ isMobile: false }); 
}

function genUseMediaContext(context: MediaContextType): ZeitlerForceDocumentationContextType {
    return {
        useMediaContext: () => {
            return context;
        }
    }
}
