import type React from "react";
import { ZEITLERFORCE_HEADER_HEIGHT } from "./header";
import { useMediaContext } from "./mediaContext";

export function ZeitlerforceSidebar() {
    const { isMobile } = useMediaContext();

    const sidebarStyles: React.CSSProperties = {
        position: 'sticky',
        top: ZEITLERFORCE_HEADER_HEIGHT,
        backgroundColor: 'red',
        width: isMobile ? 10 : 250,
        height: `calc(100vh - ${ZEITLERFORCE_HEADER_HEIGHT}px)`
    };

    return (
        <div style={sidebarStyles}></div>
    );
}