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
