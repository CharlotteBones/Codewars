# Reversed words
def reverse_words(s):
    
    return ' '.join(list(reversed(s.split(' '))))

# Test
print(reverse_words('hello world!'))  # --> 'world! Hello'
