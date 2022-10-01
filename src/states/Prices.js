let prices = {
    designer: {
        max: 291,
        base: 602,
        professional: 388,
        practical: 167,
        stock: false,
        discount: 10,
    },
    frontend: {
        max: 149,
        base: 198,
        professional: 178,
        practical: 167,
        stock: false,
        discount: 10,
    },
    pythone: {
        max: 600,
        base: 198,
        professional: 200,
        practical: 167,
        stock: false,
        discount: 10,
    },

    practice: {
        twoMonth: 167,
        twoHalfMonth: 210,
        threeMonth: 167,
    },
};

let successTrajectoryPrices = [
    // Junior  Midle Senior
    {
        data: [752, 950, 1549], // UI
    },
    {
        data: [1100, 1674, 3027], // PM
    },
    {
        data: [704, 900, 2000], // QA
    },
    {
        data: [668, 1143, 1798], // HR
    },
    {
        data: [555, 1752, 3607], // Front
    },
    {
        data: [555, 1752, 3607], // Back
    },
    {
        data: [1100, 1674, 2817], // PrdM
    },
    {
        data: [600, 1247, 3000], // Marketer
    },
];

export default { prices, successTrajectoryPrices };
