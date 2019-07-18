// Реализуйте и экспортируйте по умолчанию функцию reverseInt,
// которая переворачивает цифры в переданном числе и возвращает новое число.

const reverseInt = (number) => {
  let newNumber = number
  let negative = 1;
  if (number < 0) {
    negative = -1;
    let newNumber = Math.abs(number);
  }
  let len = String(newNumber).length;
  let answer = 0;
  for (; len >= 1; len - 1) {
    let digit = newNumber % 10;
    answer = answer * 10 + digit;
  }
  return answer * negative;
};

export default reverseInt;

console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98
