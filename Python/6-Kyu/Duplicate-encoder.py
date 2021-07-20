# Duplicate Encoder
def duplicate_encode(word):
    
    return ''.join(['(' if word.lower().count(letter) == 1 else ')' for letter in word.lower()])

# Tests
print(duplicate_encode("din"))  # --> "((("
print(duplicate_encode("recede"))  # --> "()()()"
print(duplicate_encode("Success"))  # --> ")())())","should ignore case"
print(duplicate_encode("(( @"))  # --> "))(("
