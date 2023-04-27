// UC 7 - Object Helper Functions
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let totalEmpHrs = 0;
let totalWorkingDays = 0;

function getDailyHours(empCheck) {
  switch (empCheck) {
    case 1:
      return FULL_TIME_HOURS;
    case 2:
      return PART_TIME_HOURS;
    default:
      return 0;
  }
}

function calculateWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

function getTotalWage(totalEmpHrs) {
  return totalEmpHrs * WAGE_PER_HOUR;
}

function getDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

function isMaxDaysReached() {
  return totalWorkingDays >= MAX_WORKING_DAYS;
}

function isMaxHoursReached() {
  return totalEmpHrs >= MAX_WORKING_HOURS;
}

// Loop to calculate employee wage for each day and store in array and map
while (!isMaxHoursReached() && !isMaxDaysReached()) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let dailyHrs = getDailyHours(empCheck);
  empDailyHrsMap.set(totalWorkingDays, dailyHrs);
  totalEmpHrs += dailyHrs;
  empDailyWageArr.push(calculateWage(dailyHrs));
  empDailyWageMap.set(totalWorkingDays, getDailyWage(dailyHrs));
}

let totalWage = getTotalWage(totalEmpHrs);
console.log(`Total Days: ${totalWorkingDays}`);
console.log(`Total Hours: ${totalEmpHrs}`);
console.log(`Employee Wage: ${totalWage}`);

// Map Helper Functions
// a. Calc total Wage
console.log(`\n--- Using Map Helper Functions ---\n`);
console.log(`Total Employee Wage using map: ${Array.from(empDailyWageMap.values()).reduce((a, b) => a + b, 0)}`);

// b. Show the Day along with Daily Wage using Map helper function
console.log(`\nDay wise Employee Wage using map:`);
console.log(empDailyWageMap);

// c. Show Days when Full time wage of 160
console.log(`\nDays when full time wage of 160 was earned:`);
console.log(Array.from(empDailyWageMap.keys()).filter(day => empDailyWageMap.get(day) === 160));

// d. Find the first occurrence when Full Time Wage was earned using Map function
console.log(`\nFirst time Full Time Wage was earned on Day: ${Array.from(empDailyWageMap.keys()).find(day => empDailyWageMap.get(day) === 160)}`);

// e. Check if Every Element of Full Time Wage is truly holding Full time wage
console.log(`\nIs Every Element of Full Time Wage holding Full Time Wage? ${Array.from(empDailyWageMap.values()).every(wage => wage === 160)}`);

// f. Check if there is any Part Time Wage using Map Function
let isPartTime = empDailyWageArr.some(dailyWage => dailyWage < 160);
if (isPartTime) {
  console.log("PART-TIME WAGE FOUND!");
} else {
  console.log("NO PART-TIME WAGE FOUND!");
}
