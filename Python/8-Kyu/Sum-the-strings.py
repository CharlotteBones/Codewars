# Sum the stings
def sum_str(a, b):
    
    return f'{int("0" + a) + int("0" + b)}'

# Tests
print(sum_str("4","5"))  # --> "9"
print(sum_str("34","5"))  # --> "39"
print(sum_str("9",""))  # --> "9"
