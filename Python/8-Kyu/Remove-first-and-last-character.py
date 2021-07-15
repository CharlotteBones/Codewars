# Remove first and last character
def remove_char(s):
    
    return s[1:-1]

# Tests
print(remove_char('eloquent'))  # --> 'loquen'
print(remove_char('country'))  # --> 'ountr'
print(remove_char('person'))  # --> 'erso'
print(remove_char('place'))  # --> 'lac'
print(remove_char('ok'))  # --> ''
print(remove_char('ooopsss'))  # --> 'oopss'
