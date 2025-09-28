import { screen, type RenderResult } from "@testing-library/react";
import React from "react";

export { screen };

import { render as testingLibraryRender } from "@testing-library/react";
import { ZeitlerForceDocumentationContext, type ZeitlerForceDocumentationContextType } from "../zeitlerForceDocumentation";
import type { MediaContextType } from "../mediaContext";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routerConfig } from "../browserRouter";

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

export function renderAppTestObject(context: ZeitlerForceDocumentationContextType) {
    const router = createMemoryRouter(routerConfig, {
        initialEntries: ["/"]
    });
    return render(
        <ZeitlerForceDocumentationContext.Provider value={context}>
            <RouterProvider router={router}></RouterProvider>
        </ZeitlerForceDocumentationContext.Provider>
    )
}