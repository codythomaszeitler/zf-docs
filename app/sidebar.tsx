import type React from "react";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { useAppBarHeight } from "./useAppBarHeight";
import { deployOnSaveHeader } from "./routes/deployOnSaveDocumentation";

// There must be some place we can commonly denote this.
type OnNavigateEvent = { id: 'deploy-on-save'; }

type ZeitlerForceSidebarProps = {
    isSidebarExpanded: boolean;
    onNavigate?: (event: OnNavigateEvent) => void;
}

export function ZeitlerForceSidebar({ isSidebarExpanded, onNavigate }: ZeitlerForceSidebarProps) {
    const { isMobile } = useMediaContext();
    // We can use a hook here - correct?
    const { appBarHeight, unitOfMeasurement } = useAppBarHeight();

    const isExpanded = () => {
        return isSidebarExpanded;
    };

    const position = () => {
        if (isMobile) {
            return 'absolute';
        }
        return undefined;
    }

    const width = isExpanded() ? 250 : 5;
    const sidebarStyles: React.CSSProperties = {
        width,
        height: `calc(100vh - ${appBarHeight}${unitOfMeasurement})`,
        overflow: 'hidden',
        transition: 'width 0.5s',
        padding: 5,
        position: position(),
        top: `${appBarHeight}${unitOfMeasurement}`,
        left: 0
    };

    const navigate = useNavigate();
    return (
        <Paper style={sidebarStyles} elevation={6} square>
            {isExpanded() && (
                <SimpleTreeView>
                    <TreeItem itemId="deployments" label="Deployments">
                        <TreeItem itemId="deploy-on-save" label={deployOnSaveHeader} onClick={async () => {
                            await navigate(`deploy-on-save#${encodeURI(deployOnSaveHeader)}`)
                            if (onNavigate) {
                                onNavigate({
                                    id:'deploy-on-save' 
                                });
                            }
                        }} />
                        <TreeItem itemId="deploy-folder" label="Deploy Folder" onClick={() => {
                            navigate("deploy-on-save")
                        }} />
                        <TreeItem itemId="see-errors" label="See Errors" onClick={() => {
                            navigate("deploy-on-save")
                        }} />
                    </TreeItem>
                    <TreeItem itemId="zoql" label="Zoql">
                        <TreeItem itemId="create-zoql-script" label="Create Zoql Script" onClick={() => {
                            navigate("zoql")
                        }} />
                        <TreeItem itemId="soql-intellisense" label="Soql Intellisense" onClick={() => {
                            navigate("zoql")
                        }} />
                    </TreeItem>
                    <TreeItem itemId="logs" label="Logs">
                        <TreeItem itemId="enable-debug-logging" label="Enable Debug Logging" onClick={() => {
                            navigate("logs");
                        }} />
                        <TreeItem itemId="view-debugs" label="View Debugs" onClick={() => {
                            navigate("logs");
                        }} />
                        <TreeItem itemId="refresh-debug-logs" label="Refresh Debug Logs" onClick={() => {
                            navigate("logs");
                        }} />
                    </TreeItem>
                    <TreeItem itemId="unit-tests" label="Unit Tests">
                        <TreeItem itemId="run-unit-tests" label="Run Unit Tests" onClick={() => {
                            navigate('unit-tests');
                        }} />
                    </TreeItem>
                </SimpleTreeView>
            )}
        </Paper>
    );
}