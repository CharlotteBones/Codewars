# Calculate BMI
def bmi(weight, height):

    calc = weight / (height ** 2)

    return 'Underweight' if calc <= 18.5 else 'Normal' if calc <= 25.0 else 'Overweight' if calc <= 30.0 else 'Obese'

# Tests
print(bmi(50, 1.80))  # --> "Underweight"
print(bmi(80, 1.80))  # --> "Normal"
print(bmi(90, 1.80))  # --> "Overweight"
print(bmi(110, 1.80))  # --> "Obese"
print(bmi(50, 1.50))  # --> "Normal"
