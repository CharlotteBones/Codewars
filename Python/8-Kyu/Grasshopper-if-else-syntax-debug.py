# Grasshopper If/else syntax debug
def check_alive(health):

    return True if health > 0 else False

# Tests
print(check_alive(5))  # --> True
print(check_alive(0))  # --> False
print(check_alive(-5))  # --> False
