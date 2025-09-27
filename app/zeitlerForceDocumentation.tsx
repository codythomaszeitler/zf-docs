import { ZeitlerforceNavigation } from "./navigation";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export function ZeitlerForceDocumentation() {
    return (<ThemeProvider theme={theme}>
        <ZeitlerforceNavigation></ZeitlerforceNavigation>
    </ThemeProvider>);
}