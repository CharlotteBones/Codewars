# Sort the Vowels!
def sort_vowels(s):
    
    sortedStr = ''

    if type(s) == str:
        for i in s:
            sortedStr += f'\n|{i}' if i in 'aeiouAEIOU' else f'\n{i}|'

    return sortedStr.strip('\n')

# Tests
print(sort_vowels('Codewars'))  # --> 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
print(sort_vowels('Rnd Te5T'))  # --> 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
print(sort_vowels(1337));  # --> ''
print(sort_vowels(None));  # --> ''
