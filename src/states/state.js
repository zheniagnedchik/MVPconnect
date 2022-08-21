let state = {
    testITResults: '',
    linkResult: '',
};
export default state;

export let clearResult = () => {
    state.testITResults = '';
};

export let creatingResult = (value) => {
    state.testITResults += value;
};
export let linkResultTest = () => {
    if (state.testITResults == '111111111') {
        state.linkResult = '/HR';
    } else if (state.testITResults == '222222222') {
        state.linkResult = '/Designer';
    } else if (state.testITResults == '333333333') {
        state.linkResult = '/PrdM';
    } else if (state.testITResults == '444444444') {
        state.linkResult = '/QA';
    }
};
