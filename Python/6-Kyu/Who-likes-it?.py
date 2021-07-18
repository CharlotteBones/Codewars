# Who likes it?
def likes(names):

    if len(names) <= 1:
        return f'{"no one" if len(names) == 0 else names[0]} likes this'
    elif len(names) == 2:
        return f'{names[0]} and {names[1]} like this'
    else:
        return f'{names[0]}, {names[1]} and {names[2] if len(names) == 3 else f"{len(names) - 2} others"} like this'


# Tests
print(likes([]))  # --> must be "no one likes this"
print(likes(["Peter"]))  # --> must be "Peter likes this"
print(likes(["Jacob", "Alex"]))  # --> must be "Jacob and Alex like this"
print(likes(["Max", "John", "Mark"]))  # --> must be "Max, John and Mark like this"
print(likes(["Alex", "Jacob", "Mark", "Max"]))  # --> must be "Alex, Jacob and 2 others like this"
