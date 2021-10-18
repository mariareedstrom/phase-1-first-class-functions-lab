
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2)

const returnFirstTwoDrivers = () => firstTwo;

const returnLastTwoDrivers = () => lastTwo; 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = int => {
    return function(fare){
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3); 

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}

