# Opposites Attract
def lovefunc( flower1, flower2 ):
    
    return (flower1 + flower2) % 2 == 1

# Tests
print(lovefunc(1,4))  # --> True
print(lovefunc(2,2))  # --> False
print(lovefunc(0,1))  # --> True
print(lovefunc(0,0))  # --> False
