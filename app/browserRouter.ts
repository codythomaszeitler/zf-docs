import {
    createBrowserRouter
} from "react-router";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";
import DeployOnSaveDocumentation from "./routes/deployOnSaveDocumentation";

export const routerConfig = [
    {
        path: "/",
        Component: ZeitlerForceDocumentation,
    },
    {
        path: 'deploy-on-save',
        Component: DeployOnSaveDocumentation
    }
];

export function genBrowserRouter() {
    return createBrowserRouter(routerConfig);
}