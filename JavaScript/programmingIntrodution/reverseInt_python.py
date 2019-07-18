def reverse_int(number):
    negative = 1
    if number < 0:
        negative = -1
        number = abs(number)
    answer = str(number)[::-1]
    return int(answer) * negative

print(reverse_int(31))
print(reverse_int(-123))
print(reverse_int(8900))
