# Square every digit
def square_digits(num):
    
    return int(''.join([f'{int(x) ** 2}' for x in str(num)]))

# Tests
print(square_digits(9119))  # --> 811181
print(square_digits(0))  # --> 0
