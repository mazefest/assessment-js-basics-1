///////////////////
// Apple Orchard //
///////////////////

const { isConstructorDeclaration } = require("typescript");

let daysOfTheWeek = ['Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let appleFarmTitle = ['Fuji', 'Gala', 'Pink'];

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0;
let appleFarms = [fujiAcres, galaAcres, pinkAcres];

appleFarms.forEach(appleFarm => {
    let farmAcresPickedTotal = 0;
    appleFarm.forEach(acresPicked => {
        farmAcresPickedTotal += acresPicked;
    });
    totalAcres += farmAcresPickedTotal;
});

console.log('# QUESTION 1 =================== #');
console.log('');
console.log('Total Acres');
console.log(`${totalAcres}`);
console.log('');

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

console.log('# QUESTION 2 =================== #');
console.log('');
let averageDailyAcres = totalAcres / 7;
console.log('Averaging Daily Acres');
console.log(`${averageDailyAcres} Acres`);
console.log('');

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while(acresLeft > 0) {
    acresLeft -= averageDailyAcres;
    days += 1;
}

console.log('# QUESTION 3 =================== #');
console.log('');
console.log(`Days: ${days}`);
console.log('');



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

console.log('# QUESTION 4 =================== #');
console.log('');

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// Apple Farms: [FujiAcresPicked, GalaAcresPicked, PinkAcresPinked]
// Apple Farms contains an array of arrays of numbers, with the numbers
// being the acres piced each day.
appleFarms.forEach((farm, index) => {
    farm.forEach((acresPicked) => {
        let tonsPicked = acresPicked * 6.5;
        switch (index) {
            case 0:
                fujiTons.push(tonsPicked);
                break;
            case 1:
                galaTons.push(tonsPicked);
                break;
            case 2:
                pinkTons.push(tonsPicked);
                break;
            default:
                // do nada
                break;
        }
    });
});

// Console Log Tons Picked

let appleFarmTonsPicked = [fujiTons, galaTons, pinkTons];

appleFarmTonsPicked.forEach((farm, index) => {
    let totalTons = 0;
    console.log(`# ${appleFarmTitle[index]} Tons`);
    farm.forEach((tonsPicked, index) =>{
        totalTons += tonsPicked;
        console.log(`${daysOfTheWeek[index]}: \t${tonsPicked}\ttons`);
    });
    console.log('-----------------------------');
    console.log(`Total: ${totalTons}`);
    console.log(''); // line break
});



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

console.log('# QUESTION 5 =================== #');
console.log('');

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;


appleFarmTonsPicked.forEach((farm, farmIndex) => {
    let totalPoundsPicked = 0;
    
    farm.forEach(tonsPicked => {
        totalPoundsPicked += tonsPicked * 2000;
    });

    switch(farmIndex) {
        case 0:
            fujiPounds = totalPoundsPicked;
            break;
        case 1:
            galaPounds = totalPoundsPicked;
            break;
        case 2:
            pinkPounds = totalPoundsPicked;
            break;
        default:
            // uh oh
    } 
});

appleFarmsPoundsPicked = [fujiPounds, galaPounds, pinkPounds];


// Log pounds picked per apple type
appleFarmsPoundsPicked.forEach((poundsPicked, farmIndex) => {
    console.log(`${ appleFarmTitle[farmIndex] }: ${ poundsPicked } lbs`);
});

console.log(``);




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

console.log('# QUESTION 6 =================== #');
console.log('');

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

let appleProfits = [fujiProfit, galaProfit, pinkProfit];
appleProfits.forEach((profit, farmIndex)=>{
    console.log(`${appleFarmTitle[farmIndex]} Profit: $ ${profit.toFixed(2)}`);
})

console.log('');


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

console.log('# QUESTION 7 =================== #');
console.log('');

let toalProfit = 0;
appleProfits.forEach(profit => {
    toalProfit += profit;
});

console.log('Total Profit');
console.log(`$ ${toalProfit.toFixed(2)}`);
