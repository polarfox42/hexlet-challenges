// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
// строку, состоящую только из открывающих и закрывающих круглых скобок,
// и проверяет является ли эта строка корректной. Пустая строка
// (отсутствие скобок) считается корректной.
//
// Строка считается корректной (сбалансированной), если содержащаяся
// в ней скобочная структура соответствует требованиям:
//
// Скобки — это парные структуры. У каждой открывающей скобки должна быть
// соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.
// import areBracketsBalanced from 'roundBracketsValidator';
//
// areBracketsBalanced('(())');  // true
// areBracketsBalanced('((())'); // false

const areBracketsBalanced = (text) => {
  const len = text.length;
  bracketsCounter = 0;
  for (let counter = 0; counter < len; counter += 1) {
    if (text[counter] === '(') {
      bracketsCounter += 1;
    } else if (text[counter] === ')') {
      bracketsCounter -= 1;
    } if (bracketsCounter < 0) {
      return false;
    }
  } if (bracketsCounter > 0) {
    return false;
  } return true;
};

console.log(areBracketsBalanced('(())'));
console.log(areBracketsBalanced('((())'));
