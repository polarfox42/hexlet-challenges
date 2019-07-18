// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
// два аргумента - количество нулей и количество единиц, и определяет,
// сколько есть способов размещения этих нулей и единиц так, чтобы не было
// двух нулей идущих подряд.
// Например, определим все способы размещения двух нулей и двух единиц.
// Существует шесть возможных способов размещения: 0011, 0101, 0110,
// 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд:
// 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных
// способа: 0101, 0110 и 1010. Ответ - 3.
// Примеры использования:
// import withoutTwoZeros from './solution';
//
// withoutTwoZeros(2, 2); // 3
// withoutTwoZeros(1, 1); // 2
// withoutTwoZeros(1, 3), // 4
// withoutTwoZeros(2, 4); // 10

const withoutTwoZeros = (zero, one) => {
  if (zero > one + 1) {
    return 0;
  } else if (zero === 0 || one === 0) {
    return 1;
  } return withoutTwoZeros(zero, one - 1) + withoutTwoZeros(zero - 1, one - 1);
};

export default withoutTwoZeros;

console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 4));
