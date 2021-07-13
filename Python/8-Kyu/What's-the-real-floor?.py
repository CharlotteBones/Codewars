# What's the real floor?
def get_real_floor(n):
    
    return n if n <= 0 else n - 1 if 0 < n < 13 else n - 2

# Tests
print(get_real_floor(1))  # --> 0
print(get_real_floor(5))  # --> 4
print(get_real_floor(15))  # --> 13
