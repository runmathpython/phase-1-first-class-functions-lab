const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const selectingDrivers = [];

const returnFirstTwoDrivers = function (drivers) {return drivers.slice(0, 2)};

const returnLastTwoDrivers = function (drivers) {return drivers.slice(-2)};

selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier (multiplier) {
    if (multiplier === 2) {
        return function (fare) {
            return fare * 2;
        }
    } else if (multiplier === 3) {
        return function (fare) {
            return fare * 3;
        }
    } else if (multiplier === 5) {
        return function (fare) {
            return fare * 5;
        }
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(5);

function selectDifferentDrivers (drivers, f) {
    return f(drivers);
}
