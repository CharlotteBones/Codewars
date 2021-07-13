# Grasshopper - personalised message
def greet(name, owner):
    
    return f'Hello {"boss" if name == owner else "guest"}'

# Tests
print(greet('Daniel', 'Daniel'))  # --> 'Hello boss'
print(greet('Greg', 'Daniel'))  # --> 'Hello guest'
