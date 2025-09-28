import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";
import DeployOnSaveDocumentation from "./routes/deployOnSaveDocumentation";

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