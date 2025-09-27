import { screen, type RenderResult } from "@testing-library/react";
import type React from "react";

export { screen };

import { render as testingLibraryRender } from "@testing-library/react";

export function render(ui: React.ReactNode): RenderResult {
    return testingLibraryRender(ui);
}
