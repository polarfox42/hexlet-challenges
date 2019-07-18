# Реализуйте и экспортируйте по умолчанию функцию reverseInt,
# которая переворачивает цифры в переданном числе и возвращает новое число.

def reverse_int(number):
  negative = 1
  if number < 0:
    negative = -1
    number = abs(number)
  length = len(str(number))
  answer = 0
  for i in range(length):
    digit = number % 10
    answer =  answer * 10 + digit
    number = (number - digit) // 10
  return answer * negative

print(reverse_int(31))
print(reverse_int(-123))
print(reverse_int(8900))
