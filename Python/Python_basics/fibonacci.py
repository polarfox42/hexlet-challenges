"""
Реализуйте функцию fib, находящую положительные Числа Фибоначчи.
Аргументом функции является порядковый номер числа.

Формула:
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)
Пример:

fib(3)   # 2
fib(5)   # 5
fib(10)  # 55
"""

def fib(number):
    if number == 0 or number == 1:
        return number
    return fib(number - 1) + fib(number - 2)

print(fib(0))
print(fib(1))
print(fib(5))
print(fib(10))
