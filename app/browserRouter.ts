import {
    createBrowserRouter
} from "react-router";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";
import DeployOnSaveDocumentation from "./routes/deployOnSaveDocumentation";

// Okay, so what in the world is going wrong here?
export function genBrowserRouter() {
    return createBrowserRouter([
        {
            path: "/",
            Component: ZeitlerForceDocumentation,
        },
        {
            path: 'deploy-on-save',
            Component: DeployOnSaveDocumentation
        }
    ]);
}