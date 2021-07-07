# Multiples of 3 or 5
def solution(number):
    
    sum = 0

    for i in range(0, number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    
    return(sum)

# Test
print(solution(10))  # --> 23
print(solution(15))  # --> 45
