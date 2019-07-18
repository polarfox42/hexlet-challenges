const reverseInt = (number) => {
  let negative = 1;
  let num = number;
  if (number < 0) {
    negative = -1;
    num *= (-1);
  } len = String(num).length;
  let answer = '';
  for (let counter = 0; counter < len; counter += 1) {
    answer = String(num)[counter] + answer;
  } answer = Number(answer) * negative;
  return answer;
};

export default reverseInt;

console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98
