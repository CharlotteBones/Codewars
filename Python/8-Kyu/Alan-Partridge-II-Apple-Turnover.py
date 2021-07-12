# Alan Partridge II - Apple Turnover
def apple(x):

    if int(x) ** 2 > 1000:
        return 'It\'s hotter than the sun!!'
    
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'

# Tests
print(apple('50'))  # --> "It's hotter than the sun!!"
print(apple(4))  # --> "Help yourself to a honeycomb Yorkie for the glovebox."
print(apple("12"))  # --> "Help yourself to a honeycomb Yorkie for the glovebox."
print(apple(60))  # --> "It's hotter than the sun!!"
