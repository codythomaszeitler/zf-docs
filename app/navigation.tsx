import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ZeitlerForceSidebar } from "./sidebar";
import { Outlet } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ZeitlerForceDocumentationContext } from "./zeitlerForceDocumentation";
import {useAppBarHeight} from './useAppBarHeight';

export const ZEITLERFORCE_HEADER_HEIGHT = 64;

export type ZeitlerForceHeaderProps = {
    onMobileExpandClick?: () => void;
}

export function ZeitlerForceNavigation() {
    const { useMediaContext } = useContext(ZeitlerForceDocumentationContext);
    const { isMobile } = useMediaContext();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(!isMobile);

    useEffect(() => {
        setIsSidebarExpanded(!isMobile);
    }, [isMobile]);

    const appBarHeight = useAppBarHeight();

    return (
        <Box display='flex' flexDirection='column'>
            <AppBar position="static" enableColorOnDark >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {
                            setIsSidebarExpanded((prev) => !prev);
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/** TODO: Make this automatically pick up the correct version. */}
                        v0.5.3
                    </Typography>
                    <Button color="inherit">
                        ZeitlerForce
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display='flex' flexDirection='row' flex={'1 0 auto'} height={`calc(100vh - ${appBarHeight}px)`}>

                <ZeitlerForceSidebar isSidebarExpanded={isSidebarExpanded}></ZeitlerForceSidebar>
                <Box flex='1 0'>
                    <Box height='100%' width='100%' overflow='auto'>
                        <Outlet></Outlet>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}