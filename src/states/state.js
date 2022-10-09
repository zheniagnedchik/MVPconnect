import { check } from 'prettier';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

let state = {
    testITResults: [0, 0, 0, 0], // All points
    linkResult: '', // Link for NavLink in question/TestITQuestion10.jsx
    displaySize: {
        isMobile: Boolean,
        isDesktop: Boolean,
    },
    numberSplider: 0,
    numberModule: 2,
};
export default state;

export let clearResult = () => {
    state.testITResults = [0, 0, 0, 0]; // Clear All points
};

export let creatingResult = (value) => {
    if (value === 1) {
        state.testITResults[0] += 1; // Point for HR (b/a)
    } else if (value === 2) {
        state.testITResults[1] += 1; // Point for Designer
    } else if (value === 3) {
        state.testITResults[2] += 1; // Point for PrdM
    } else if (value === 4) {
        state.testITResults[3] += 1; // Point for QA (dev)
    }
};
// Link for NavLink in question/TestITQuestion10.jsx
export let linkResultTest = () => {
    let max = Math.max(...state.testITResults);
    let result = state.testITResults.indexOf(max);
    if (result === 0) {
        state.linkResult = '/HR';
    } else if (result === 1) {
        state.linkResult = '/UX';
    } else if (result === 2) {
        state.linkResult = '/PrdM';
    } else if (result === 3) {
        state.linkResult = '/QA';
    } else {
        state.linkResult = '/PrdM';
    }
};
// Check innerWidth and innerHeight sizes
export const CheckWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
            if (window.innerWidth > 800) {
                state.displaySize.isDesktop = true;
            } else {
                state.displaySize.isDesktop = false;
            }
        }

        // document.addEventListener('readystatechange', handleWindowResize);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    function getWindowSize() {
        const innerWidth = window;
        const innerHeight = window;

        return { innerWidth, innerHeight };
    }
};

export const CheckWindowStart = () => {
    if (window.innerWidth > 800) {
        state.displaySize.isDesktop = true;
    } else {
        state.displaySize.isDesktop = false;
    }
};

export const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// check number splider and module in Courses for  spliders in Form (forms/CoursesForm and forms/splider/DesktopSplider, MobileSplider and (menuDesktop, menuMobile for modules)). CallBack for all buttons which open CoursesForm

export const CheckNumberSplider = (e) => {
    state.numberSplider = e;
};
export const ChangNumberModule = (e) => {
    state.numberModule = e;
};
