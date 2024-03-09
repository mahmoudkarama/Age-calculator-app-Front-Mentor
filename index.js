const enterDay = document.getElementById("day");
const enterMonth = document.getElementById("month");
const enterYear = document.getElementById("year");
const displayYears = document.getElementById("years");
const displayMonths = document.getElementById("months");
const displayDays = document.getElementById("days");
const btn = document.querySelector(".split button");

let dayLab = document.querySelector("[for= day]");
let monthLab = document.querySelector("[for= month]");
let yearLab = document.querySelector("[for= year]");

let dayEmptyError = document.querySelector(".emptyErrorDay");
let dayInvalidError = document.querySelector(".invalidErrorDay");

let monthEmptyError = document.querySelector(".emptyErrorMonth");
let monthInvalidError = document.querySelector(".invalidErrorMonth");

let yearEmptyError = document.querySelector(".emptyErrorYear");
let yearInvalidError = document.querySelector(".invalidErrorYear");

let allInput = document.querySelectorAll("input");
console.log(allInput);

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];



// ######################################

btn.addEventListener("click", validInput)

function validInput() {
    if (enterDay.value == "" && enterMonth.value == "" && enterYear.value == "") {
        emptyDay();
        emptyMonth();
        emptyYear();
    }else if (enterDay.value == "") {
        emptyDay();
    } else if (enterMonth.value == "") {
        emptyMonth();
    } else if (enterYear.value == "") {
        emptyYear();
    } else if (enterDay.value < 1 || enterDay.value > 31) {
        invalidDay();
    } else if (enterMonth.value < 1 || enterMonth.value > 12) {
        invalidMonth();
    } else if (enterYear.value > new Date().getFullYear()) {
        invalidYear();
    } else {
        removeError();
        displayAge();
    }
}


// #################### check Error ################
function emptyDay() {
    errorDay();
    dayEmptyError.classList.toggle("hide");
}
function invalidDay() {
    errorDay();
    dayInvalidError.classList.toggle("hide");
}
function emptyMonth() {
    errorMonth();
    monthEmptyError.classList.toggle("hide");
}
function invalidMonth() {
    errorMonth();
    monthInvalidError.classList.toggle("hide");
}
function emptyYear() {
    errorYear();
    yearEmptyError.classList.toggle("hide");
}
function invalidYear() {
    errorYear();
    yearInvalidError.classList.toggle("hide");
}

function errorDay() {
    dayLab.classList.toggle("error");
    enterDay.classList.toggle("error");
}
function errorMonth() {
    monthLab.classList.toggle("error");
    enterMonth.classList.toggle("error");
}
function errorYear() {
    yearLab.classList.toggle("error");
    enterYear.classList.toggle("error");
}
// #################### End ################


function removeError() {
    dayLab.classList.remove("error");
    monthLab.classList.remove("error");
    yearLab.classList.remove("error");
    for (let i = 0; i < allInput.length; i++) {
        allInput[i].classList.remove("error");
    }
    dayEmptyError.classList.add("hide");
    monthEmptyError.classList.add("hide");
    yearEmptyError.classList.add("hide");
    dayInvalidError.classList.add("hide");
    monthInvalidError.classList.add("hide");
    yearInvalidError.classList.add("hide");
}

 // Calculating the Age
function displayAge() {
    let d = enterDay.value;
    let m = enterMonth.value;
    let y = enterYear.value;
    let date = new Date();
    let nowD = date.getDate();
    let nowM = date.getMonth();
    let nowY = date.getFullYear();

    let yearDiff = nowY - y;
    let monthDiff = nowM - m;
    let dateDiff = nowD - d;

    if (monthDiff >= 0) {
        console.log(yearDiff);
    } else {
        yearDiff -= 1;
    }
    
    if (monthDiff >= 0 && dateDiff >= 0) {
        console.log(monthDiff);
        monthDiff += 1;
    } else if (monthDiff >= 0 && dateDiff < 0) {
        monthDiff -= 1;
        monthDiff += 1;
    } else if (monthDiff < 0 && dateDiff >= 0) {
        monthDiff = 12 + monthDiff;
        monthDiff += 1;
    } else if (monthDiff < 0 && dateDiff < 0) {
        monthDiff = 12 + monthDiff;
        monthDiff--;
        monthDiff += 1;
    }

    if (dateDiff >= 0) {
        console.log(dateDiff);
    } else {
        dateDiff = 30 + dateDiff;
    }

    displayDays.innerHTML = dateDiff;
    displayMonths.innerHTML = monthDiff;
    displayYears.innerHTML = yearDiff;
    console.log(yearDiff);
    console.log(monthDiff);
    console.log(dateDiff);
}








    


