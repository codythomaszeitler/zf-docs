import type React from "react";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { useNavigate, type To } from "react-router";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { useAppBarHeight } from "./useAppBarHeight";
import { deployFolderHeader, deployOnSaveHeader, seeErrorsHeader } from "./routes/deployOnSaveDocumentation";
import { ZeitlerForceDocumentation } from "./zeitlerForceDocumentation";

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

    return (
        <Paper style={sidebarStyles} elevation={6} square>
            {isExpanded() && (
                <SimpleTreeView>
                    <ZeitlerForceTreeItem label="Deployments">
                        <ZeitlerForceTreeItem label={deployOnSaveHeader} to={`deployments#${encodeURI(deployOnSaveHeader)}`}></ZeitlerForceTreeItem>
                        <ZeitlerForceTreeItem label={deployFolderHeader} to={`deployments#${encodeURI(deployFolderHeader)}`}></ZeitlerForceTreeItem>
                        <ZeitlerForceTreeItem label={seeErrorsHeader} to={`deployments#${encodeURI(seeErrorsHeader)}`}></ZeitlerForceTreeItem>
                    </ZeitlerForceTreeItem >
                    <ZeitlerForceTreeItem label="Zoql">
                        <ZeitlerForceTreeItem label="Create Zoql Script" to={`zoql#${encodeURI("Create Zoql Script")}`}></ZeitlerForceTreeItem>
                        <ZeitlerForceTreeItem label="Soql Intellisense" to={`zoql#${encodeURI("Soql")}`}></ZeitlerForceTreeItem>
                    </ZeitlerForceTreeItem>
                    <ZeitlerForceTreeItem label="Logs">
                        <ZeitlerForceTreeItem label="Enable Debug Logging" to={`logs#${encodeURI("Enable Debug Logging")}`}></ZeitlerForceTreeItem>
                        <ZeitlerForceTreeItem label="View Debugs" to={`logs#${encodeURI("View Debugs")}`}></ZeitlerForceTreeItem>
                        <ZeitlerForceTreeItem label="Refresh Debug Logs" to={`logs#${encodeURI("Refresh Debug Logs")}`}></ZeitlerForceTreeItem>
                    </ZeitlerForceTreeItem>
                    <ZeitlerForceTreeItem label="Unit Tests">
                        <ZeitlerForceTreeItem label="Run Unit Tests" to={`unit-tests#${encodeURI("Run Unit Tests")}`}></ZeitlerForceTreeItem>
                    </ZeitlerForceTreeItem>
                </SimpleTreeView>
            )}
        </Paper>
    );
}

function ZeitlerForceTreeItem({ label, to, children }: { label: string; to?: To; children?: React.ReactNode[] | React.ReactNode }) {
    const navigate = useNavigate();
    return (
        <TreeItem itemId={label} label={label} onClick={() => {
            if (to) {
                navigate(to);
            }
        }}>
            {children}
        </TreeItem>
    )
}