// ДНК и РНК это последовательности нуклеотидов.
// Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
// Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
// Цепь РНК составляется на основе цепи ДНК последовательной заменой
// каждого нуклеотида:
// G -> C
// C -> G
// T -> A
// A -> U
// dnaToRna.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
// цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
//  Если во входном параметре нет ни одного нуклеотида (т.е. передана
//  пустая строка), то функция должна вернуть пустую строку.
//  Если в переданной цепи ДНК встретится "незнакомый" нуклеотид
//  (не являющийся одним из четырех перечисленных выше), то функция должна
//  вернуть null.
//
// dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
// dnaToRna('CCGTA'); // 'GGCAU'
// dnaToRna(''); // ''
// dnaToRna('ACNTG'); // null

const dnaToRna = (chain) => {
  let result_chain = '';
  const len = chain.length;
  for (counter = 0; counter < len; counter += 1) {
    if (chain[counter] === 'G') {
      result_chain += 'C';
    } else if (chain[counter] === 'C') {
      result_chain += 'G';
    } else if (chain[counter] === 'T') {
      result_chain += 'A';
    } else if (chain[counter] === 'A') {
      result_chain += 'U';
    } else {
      return null;
    }
  } return result_chain;
};

export default dnaToRna;

console.log(dnaToRna('ACGTGGTCTTAA'));
console.log(dnaToRna('CCGTA'));
console.log(dnaToRna(''));
console.log(dnaToRna('ACNTG'));
