# Thinkful-logic drills: traffic light
def update_light(current):
    
    lights = { 'green' : 'yellow', 'yellow' : 'red', 'red' : 'green'}

    return lights[current]

# Tests
print(update_light('green'))  # --> 'yellow'
print(update_light('yellow'))  # --> 'red'
print(update_light('red'))  # --> 'green'
