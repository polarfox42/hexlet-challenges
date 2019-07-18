"""
Реализуйте функцию fizz_buzz, которая возвращает строку с числами (через пробел) в диапазоне от begin до end
включительно. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях в строку добавляется само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно).
Если диапазон пуст (в случае, когда begin > end), то функция возвращает пустую строку.

Пример
Вызов функции:

print(fizz_buzz(11, 20))
Вывод в терминале:

11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz
Это задание крайне часто задают на собеседованиях.
"""

def fizz_buzz(start, finish):
    result_list = []
    while start <= finish:
        result = ''
        if start % 3 == 0 and start % 5 == 0:
            result += 'FizzBuzz'
        elif start % 3 == 0:
            result += 'Fizz'
        elif start % 5 == 0:
            result += 'Buzz'
        else:
            result += str(start)
        result_list.append(result)
        start += 1
    answer = ' '.join(result_list)
    return answer

print(fizz_buzz(11, 20))