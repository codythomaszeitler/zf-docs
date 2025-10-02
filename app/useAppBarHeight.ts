import { useMediaQuery, useTheme } from '@mui/material';

type MinHeight = {
    minHeight: number,
};

export function useAppBarHeight(): { appBarHeight: number; unitOfMeasurement: string } {
    const {
        mixins: { toolbar },
        breakpoints,
    } = useTheme();
    const toolbarDesktopQuery = breakpoints.up('sm');
    const toolbarLandscapeQuery = `${breakpoints.up('xs')} and (orientation: landscape)`;
    const isDesktop = useMediaQuery(toolbarDesktopQuery);
    const isLandscape = useMediaQuery(toolbarLandscapeQuery);

    let currentToolbarMinHeight;
    if (isDesktop) {
        currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
    } else if (isLandscape) {
        currentToolbarMinHeight = toolbar[toolbarLandscapeQuery];
    } else {
        currentToolbarMinHeight = toolbar;
    }

    return {
        appBarHeight: (currentToolbarMinHeight as MinHeight).minHeight,
        unitOfMeasurement: 'px'
    }
}