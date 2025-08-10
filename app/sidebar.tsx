import type React from "react";
import { ZEITLERFORCE_HEADER_HEIGHT } from "./header";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

type ZeitlerForceSidebarProps = {
    isMobileSidebarExpanded: boolean;
}

export function ZeitlerForceSidebar({ isMobileSidebarExpanded }: ZeitlerForceSidebarProps) {
    const { isMobile } = useMediaContext();

    const isExpanded = () => {
        if (!isMobile) {
            return true;
        }
        return isMobileSidebarExpanded;
    };

    const sidebarStyles: React.CSSProperties = {
        position: 'sticky',
        top: ZEITLERFORCE_HEADER_HEIGHT,
        width: isExpanded() ? 250 : 5,
        height: `calc(100vh - ${ZEITLERFORCE_HEADER_HEIGHT}px)`,
        overflow: 'hidden',
        transition: 'width 2s',
        padding : 5
    };

    const navigate = useNavigate();

    return (
        <Paper style={sidebarStyles} elevation={6} square>
            {isExpanded() && (
                <SimpleTreeView>
                    <TreeItem itemId="deployments" label="Deployments">
                        <TreeItem itemId="deploy-on-save" label="Deploy on Save" onClick={(event) => {
                            console.log(event);
                            navigate("/documentation/deployments")
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