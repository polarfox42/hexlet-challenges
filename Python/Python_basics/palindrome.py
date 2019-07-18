"""
Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: "радар", "топот".

src/solution.py
Реализуйте функцию is_palindrome, которая принимает на вход слово, определяет является ли оно палиндромом
и возвращает логическое значение.

Примеры использования:

is_palindrome('radar')  # True
is_palindrome('a')      # True
is_palindrome('abs')    # False
"""


def is_palindrome(word):
    inverse = word[::-1]
    if word == inverse:
        return True
    return False


print(is_palindrome('radar'))
print(is_palindrome('a'))
print(is_palindrome('abd'))