import { useEffect, useRef, useState } from "react";

function useElementSize() {
    const elementRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const currentElement = elementRef.current;

        if (!currentElement) {
            return;
        }

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === currentElement) {
                    setSize({
                        width: entry.contentRect.width,
                        height: entry.contentRect.height,
                    });
                }
            }
        });

        resizeObserver.observe(currentElement);

        return () => {
            resizeObserver.disconnect();
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

    return [elementRef, size];
}