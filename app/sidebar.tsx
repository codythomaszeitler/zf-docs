import type React from "react";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { useNavigate, type To } from "react-router";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { useAppBarHeight } from "./useAppBarHeight";
import { deployFolderHeader, deployOnSaveHeader, seeErrorsHeader } from "./routes/deployOnSaveDocumentation";
import { useState } from "react";
import { createZoqlScriptHeader, soqlIntellisenseHeader } from "./routes/zoqlDocumentation";

type ZeitlerForceSidebarProps = {
    isSidebarExpanded: boolean;
    config: ZeitlerForceSidebarConfig
};

interface ZeitlerForceSidebarConfig {
    children: ZeitlerForceTreeItemConfig[];
}

interface ZeitlerForceTreeItemConfig {
    label: string;
    to: To;
    children?: ZeitlerForceTreeItemConfig[];
}

export const config: ZeitlerForceSidebarConfig = {
    children: [
        {
            label: 'Deployments',
            to: 'deployments',
            children: [
                {
                    label: deployOnSaveHeader,
                    to: `deployments#${encodeURI(deployOnSaveHeader)}`
                },
                {
                    label: deployFolderHeader,
                    to: `deployments#${encodeURI(deployFolderHeader)}`
                },
                {
                    label: seeErrorsHeader,
                    to: `deployments#${encodeURI(seeErrorsHeader)}`
                }
            ],
        },
        {
            label: 'Zoql',
            to: 'zoql',
            children: [
                {
                    label: createZoqlScriptHeader,
                    to: `zoql#${encodeURI(createZoqlScriptHeader)}`
                },
                {
                    label: soqlIntellisenseHeader,
                    to: `zoql#${encodeURI(soqlIntellisenseHeader)}`
                }
            ],
        },
        {
            label: 'Logs',
            to: 'logs',
            children: [
                {
                    label: 'Enable Debug Logging',
                    to: `logs#${encodeURI("Enable Debug Logging")}`
                },
                {
                    label: 'View Debugs',
                    to: `logs#${encodeURI("View Debugs")}`
                },
                {
                    label: 'Refresh Debug Logs',
                    to: `logs#${encodeURI("Refresh Debug Logs")}`
                }
            ]
        },
        {
            label: 'Unit Tests',
            to: 'unit-tests',
            children: [{
                label: 'Run Unit Tests',
                to: `unit-tests#${encodeURI("Run Unit Tests")}`
            }]
        }
    ]
}

export function ZeitlerForceSidebar({ isSidebarExpanded, config: { children } }: ZeitlerForceSidebarProps) {
    const { isMobile } = useMediaContext();
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

    const width = isExpanded() ? 250 : 1;
    const sidebarStyles: React.CSSProperties = {
        width,
        height: `calc(100vh - ${appBarHeight}${unitOfMeasurement})`,
        overflow: 'hidden',
        transition: 'width 0.5s',
        padding: isExpanded() ? 5 : 2,
        position: position(),
        top: `${appBarHeight}${unitOfMeasurement}`,
        left: 0
    };

    const allParentTreeIds = ['Deployments', 'Zoql', 'Logs', 'Unit Tests'];
    const [expandedItems, setExpandedItems] = useState<string[]>(allParentTreeIds);

    return (
        <Paper style={sidebarStyles} elevation={6} square>
            {isExpanded() && (
                <SimpleTreeView expandedItems={expandedItems} onExpandedItemsChange={() => {
                    setExpandedItems(allParentTreeIds);
                }}>
                    {
                        children?.map(child => {
                            return <ZeitlerForceTreeItem {...child}></ZeitlerForceTreeItem>
                        })
                    }
                </SimpleTreeView>
            )}
        </Paper>
    );
}

function ZeitlerForceTreeItem({ label, to, children }: { label: string; to?: To; children?: ZeitlerForceTreeItemConfig[] }) {
    const navigate = useNavigate();
    return (
        <TreeItem itemId={label} label={label} onClick={() => {
            if (to) {
                navigate(to);
            }
        }}>
            {children?.map(child => {
                return <ZeitlerForceTreeItem {...child}></ZeitlerForceTreeItem>
            })}
        </TreeItem>
    )
}