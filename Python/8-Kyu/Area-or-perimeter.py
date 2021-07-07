# Area or perimeter
def area_or_perimeter(l , w):
    
    return l * w if l == w  else (w + l) * 2

# Test
print(area_or_perimeter(4, 4))  # --> 16
print(area_or_perimeter(6, 10))  # --> 32
