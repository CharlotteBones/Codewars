# Remove exclamation marks
def remove_exclamation_marks(s):
    
    return s.replace('!', '')

# Tests
print(remove_exclamation_marks("Hello World!"))  # --> "Hello World"
print(remove_exclamation_marks("Hello World!!!"))  # --> "Hello World"
print(remove_exclamation_marks("Hi! Hello!"))  # --> "Hi Hello"
print(remove_exclamation_marks(""))  # --> ""
print(remove_exclamation_marks("Oh, no!!!"))  # --> "Oh, no"
