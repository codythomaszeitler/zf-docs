import type React from "react";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

type ZeitlerForceSidebarProps = {
    isSidebarExpanded: boolean;
}

export function ZeitlerForceSidebar({ isSidebarExpanded }: ZeitlerForceSidebarProps) {
    const { isMobile } = useMediaContext();

    const isExpanded = () => {
        return isSidebarExpanded;
    };

    const position = () => {
        if (isMobile && isSidebarExpanded) {
            return 'absolute';
        }
        return undefined;
    }

    const width = isExpanded() ? 250 : 5;
    const sidebarStyles: React.CSSProperties = {
        width,
        height: '100%',
        overflow: 'hidden',
        transition: 'width 0.5s',
        padding: 5,
        position: position(),
        top: '5vh',
        left: 0
    };

    const navigate = useNavigate();
    return (
        <Paper style={sidebarStyles} elevation={6} square>
            {isExpanded() && (
                <SimpleTreeView>
                    <TreeItem itemId="deployments" label="Deployments">
                        <TreeItem itemId="deploy-on-save" label="Deploy on Save" onClick={(event) => {
                            navigate("deploy-on-save")
                        }} />
                        <TreeItem itemId="deploy-folder" label="Deploy Folder" />
                        <TreeItem itemId="see-errors" label="See Errors" />
                    </TreeItem>
                    <TreeItem itemId="zoql" label="Zoql">
                        <TreeItem itemId="create-zoql-script" label="Create Zoql Script" onClick={() => {
                            navigate("/documentation/zoql")
                        }} />
                        <TreeItem itemId="soql-intellisense" label="Soql Intellisense" />
                    </TreeItem>
                    <TreeItem itemId="logs" label="Logs">
                        <TreeItem itemId="enable-debug-logging" label="Enable Debug Logging" />
                        <TreeItem itemId="view-debugs" label="View Debugs" />
                        <TreeItem itemId="refresh-debug-logs" label="Refresh Debug Logs" />
                    </TreeItem>
                    <TreeItem itemId="unit-tests" label="Unit Tests">
                        <TreeItem itemId="run-unit-tests" label="Run Unit Tests" />
                    </TreeItem>
                </SimpleTreeView>
            )}
        </Paper>
    );
}