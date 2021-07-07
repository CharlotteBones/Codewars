# Geometry Basics: Distance between points in 2D
import math

def distance_between_points(a, b):

    return math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    # return math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) <-- indexing used for testing 

# Tests
print(distance_between_points((3, 3), (3, 3)))  # --> 0
print(distance_between_points((1, 6), (4, 2)))  # --> 5
print(distance_between_points((-10.2, 12.5), (0.3, 14.7)))  # --> 10
