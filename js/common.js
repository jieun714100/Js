/**
 *
 * @param {*} n1 : 더하고자 하는 수1
 * @param {*} n2 : 더하고자 하는 수2
 * @returns
 */

function sum(n1, n2) {
  return n1 + n2;
}

const sum = (n1, n2) => n1 + n2;

/**
 *
 * @param {*} productPrice : 물품가격
 * @returns
 */
function taxAmount(productPrice) {
  let tax = 0.1;
  return tax * productPrice;
}

const taxAmount = (productPrice) => {
  let tax = 0.1;
  tax * productPrice;
};

// const sum3 = (n1, n2) => n1 + n2;
// console.log(sum3(4, 5))

// const getIntervalDate = (day) => {
//   let today = new Date();
//   let

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getIntervalDateFormat = (day, format) => {
  let today = new Date();
  let dayMilliSec = 24 * 60 * 60 * 1000; //하루 밀리초
  let intervalDay = today.getTime() + day * dayMilliSec;
  let d = new Date(intervalDay);

  let year8 = d.getFullYear();
  let month8 = d.getMonth();
  let date8 = d.getDate();

  let calender =
    year8.toString() +
    "-" +
    (month8 + 1).toString().padStart(2, "0") +
    "-" +
    date8.toString().padStart(2, "0");

  if (format.length === 10) {
    return calender;
  } else if (format.length === 8) {
    return calender.slice(2);
  }
};

const getIntervalDateFormat2 = (day, format = "YYYY.MM.DD") => {
  let now = new Date();
  let dayMilliseconds = 24 * 60 * 60 * 1000;
  let intervalDate = now.getTime() + day * dayMilliseconds;
  let d = new Date(intervalDate);
  let year = d.getFullYear().toString();
  let month = (d.getMonth() + 1).toString().padStart(2, 0);
  let day2 = d.getDate().toString().padStart(2, 0);

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day2);
};
