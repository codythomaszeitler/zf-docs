import {
    createBrowserRouter,
    type RouteObject
} from "react-router";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";
import DeployOnSaveDocumentation from "./routes/deployOnSaveDocumentation";
import Dashboard from "./routes/dashboard";

export const routerConfig: RouteObject[] = [
    {
        path: "/",
        Component: ZeitlerForceDocumentation,
        children: [
            {
                index: true,
                Component : Dashboard
            },
            {
                path: 'deploy-on-save',
                Component: DeployOnSaveDocumentation
            }
        ]
    }
];

export function genBrowserRouter() {
    return createBrowserRouter(routerConfig);
}