import type React from "react";
import { ZEITLERFORCE_HEADER_HEIGHT } from "./header";
import { useMediaContext } from "./mediaContext";

import Paper from '@mui/material/Paper';
import { Button, List, ListItem } from "@mui/material";

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

    // You probably are going to just NOT render the true on the left.

    const sidebarStyles: React.CSSProperties = {
        position: 'sticky',
        top: ZEITLERFORCE_HEADER_HEIGHT,
        width: isExpanded() ? 250: 5,
        height: `calc(100vh - ${ZEITLERFORCE_HEADER_HEIGHT}px)`,
        overflow : 'hidden'
    };

    return (
        <Paper style={sidebarStyles} elevation={6} square>
            <List>
                <ListItem ><Button>Cody</Button></ListItem>
            </List>
        </Paper>
    );
}