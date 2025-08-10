import { useMediaQuery } from "@mui/material";

export type MediaContextType = {
    isMobile: boolean
};

export function useMediaContext(): MediaContextType {
    const isMobile = useMediaQuery('(max-width: 650px)');
    return {
        isMobile
    };
}