const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

function getWorkingHrs(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HRS;
    case IS_FULL_TIME:
      return FULL_TIME_HRS;
    default:
      return 0;
  }
}

let empHrs = 0;
let empCheck = 0;
let empWage = 0;
let totalEmpHrs = 0;
let totalEmpDays = 0;
let totalEmpWage = 0;
let dailyWageArray = [];

while (totalEmpHrs < MAX_WORKING_HRS && totalEmpDays < MAX_WORKING_DAYS) {
  empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHrs(empCheck);
  totalEmpHrs += empHrs;
  totalEmpDays++;
  empWage = empHrs * WAGE_PER_HOUR;
  totalEmpWage += empWage;
  dailyWageArray.push(empWage);
}

console.log("Total Employee Wage: " + totalEmpWage);
console.log("Total Employee Hours: " + totalEmpHrs);
console.log("Total Employee Days: " + totalEmpDays);
console.log("Daily Wage Array: " + dailyWageArray);
