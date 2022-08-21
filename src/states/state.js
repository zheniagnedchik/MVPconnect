let state = {
    testITResults: [0, 0, 0, 0], // All points
    linkResult: '', // Link for NavLink in question/TestITQuestion10.jsx
};
export default state;

export let clearResult = () => {
    state.testITResults = [0, 0, 0, 0]; // Clear All points
};

export let creatingResult = (value) => {
    if (value === 1) {
        state.testITResults[0] += 1; // Point for HR
    } else if (value === 2) {
        state.testITResults[1] += 1; // Point for Designer
    } else if (value === 3) {
        state.testITResults[2] += 1; // Point for PrdM
    } else if (value === 4) {
        state.testITResults[3] += 1; // Point for QA
    }
};
// Link for NavLink in question/TestITQuestion10.jsx
export let linkResultTest = () => {
    let max = Math.max(...state.testITResults);
    let result = state.testITResults.indexOf(max);
    if (result === 0) {
        state.linkResult = '/HR';
    } else if (result === 1) {
        state.linkResult = '/Designer';
    } else if (result === 2) {
        state.linkResult = '/PrdM';
    } else if (result === 3) {
        state.linkResult = '/QA';
    } else {
        state.linkResult = '/PrdM';
    }
};
