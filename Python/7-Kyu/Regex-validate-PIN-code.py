# Regex validate PIN code
def validate_pin(pin):
    import re

    return True if re.search('^\d{4}$|^\d{6}$', pin) else False

# Tests
print(validate_pin("1234"))   # -->  true
print(validate_pin("12345"))  # -->  false
print(validate_pin("a234"))   # -->  false
