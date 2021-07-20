# Factorial
def factorial(n):
    import math

    if 0 <= n <= 12: 
        return math.prod([num for num in range(1, n + 1)]) 
    else:
        raise ValueError

# Tests
print(factorial(0))  # --> 1 "factorial for 0 is 1"
print(factorial(1))  # --> 1 "factorial for 1 is 1"
print(factorial(2))  # --> 2 "factorial for 2 is 2"
print(factorial(3))  # --> 6 "factorial for 3 is 6"
