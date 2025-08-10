import { useMediaContext } from "./mediaContext";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

export const ZEITLERFORCE_HEADER_HEIGHT = 50;

export type ZeitlerForceHeaderProps = {
    onMobileExpandClick?: () => void;
}

export function ZeitlerforceHeader({ onMobileExpandClick }: ZeitlerForceHeaderProps) {
    const { isMobile } = useMediaContext();

    return (<div style={{
        position: 'sticky',
        top: 0,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div>
            {isMobile && (
                <Button style={{
                    marginLeft: 10
                }} onClick={() => {
                    if (onMobileExpandClick) {
                        onMobileExpandClick();
                    }
                }}>
                    <MenuIcon></MenuIcon>
                </Button>
            )}
            <Button style={{
                marginLeft: 10,
                marginRight: 10,
            }}>ZeitlerForce</Button>
        </div>

        <Button style={{
            marginLeft: 10,
            marginRight: 10,
        }}>Documentation</Button>
    </div>)
}