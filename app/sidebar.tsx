import { ZEITLERFORCE_HEADER_HEIGHT } from "./header";
import { useMediaContext } from "./mediaContext";

export function ZeitlerforceSidebar() {
    const { isMobile } = useMediaContext();
    return (
        <>
            {isMobile && (
                <div style={{
                    position: 'sticky',
                    top: ZEITLERFORCE_HEADER_HEIGHT,
                    backgroundColor: 'red',
                    width: 10,
                    height: `calc(100vh - ${ZEITLERFORCE_HEADER_HEIGHT}px)`
                }}>
                </div>
            )}
            {!isMobile && (
                <div style={{
                    position: 'sticky',
                    top: ZEITLERFORCE_HEADER_HEIGHT,
                    backgroundColor: 'red',
                    width: 250,
                    height: `calc(100vh - ${ZEITLERFORCE_HEADER_HEIGHT}px)`
                }}>
                </div>
            )}
        </>

    );
}