import {
    createBrowserRouter,
    type RouteObject
} from "react-router";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";
import DeployOnSaveDocumentation from "./routes/deployOnSaveDocumentation";
import Dashboard from "./routes/dashboard";
import ZoqlDocumentation from "./routes/zoqlDocumentation";
import { LogsDocumentation } from "./routes/logsDocumentation";
import { UnitTestDocumentation } from "./routes/unitTestDocumentation";

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
                path: 'deployments',
                Component: DeployOnSaveDocumentation
            },
            {
                path : 'zoql',
                Component : ZoqlDocumentation
            },
            {
                path : 'logs',
                Component : LogsDocumentation
            },
            {
                path : 'unit-tests',
                Component : UnitTestDocumentation
            }
        ]
    }
];

export function genBrowserRouter() {
    return createBrowserRouter(routerConfig);
}