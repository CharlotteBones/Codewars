# The wide-mouthed frog!
def mouth_size(animal): 
    
    return 'small' if animal.lower() == 'alligator' else 'wide'

# Tests
print(mouth_size("toucan"))  # --> "wide"
print(mouth_size("ant bear"))  # --> "wide"
print(mouth_size("alligator"))  # --> "small"
