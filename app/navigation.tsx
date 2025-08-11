import { useMediaContext } from "./mediaContext";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ZeitlerForceSidebar } from "./sidebar";
import { Outlet } from "react-router";

export const ZEITLERFORCE_HEADER_HEIGHT = 64;

export type ZeitlerForceHeaderProps = {
    onMobileExpandClick?: () => void;
}

export function ZeitlerforceNavigation() {
    const { isMobile } = useMediaContext();
    return (
        <Box display='flex' flexDirection='column'>
            <AppBar position="static" enableColorOnDark style={{
                height: '5vh'
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Documentation
                    </Typography>
                    <Button color="inherit">ZeitlerForce</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex' flexDirection='row' flex={'1 0 0'} height={"95vh"}>
                <ZeitlerForceSidebar isMobileSidebarExpanded={false}></ZeitlerForceSidebar>
                <Box flexGrow={1} overflow='scroll' width='100%'>
                    <Outlet></Outlet>
                </Box>
            </Box>
        </Box>
    );
}