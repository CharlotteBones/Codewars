# Powers of 2
def powers_of_two(n):

    return [2 ** x for x in range (0, n + 1)]

# Tests
print(powers_of_two(0))  # --> [1]
print(powers_of_two(1))  # --> [1, 2]
print(powers_of_two(4))  # --> [1, 2, 4, 8, 16]
