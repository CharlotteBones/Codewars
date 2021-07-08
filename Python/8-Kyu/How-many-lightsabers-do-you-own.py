# How many lightsabers do you own?
def how_many_light_sabers_do_you_own(name = ''): 
    # one of the tests is empty so default value assigned

    return 18 if name == 'Zach' else 0

# Tests
print(how_many_light_sabers_do_you_own('Zach'))  # --> 18
print(how_many_light_sabers_do_you_own())  # --> 0
print(how_many_light_sabers_do_you_own('zachary'))  # --> 0
