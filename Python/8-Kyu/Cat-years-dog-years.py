# Cat years, dog years
def human_years_cat_years_dog_years(human_years):

    years = [human_years, 0, 0]

    if human_years >= 1:
        years = [human_years, 15, 15]
        if human_years >= 2:
            years = [human_years, 24, 24]
            if human_years > 2:
                for x in range(2, human_years):
                    years[1] += 4
                    years[2] += 5

    return years

# Tests
print(human_years_cat_years_dog_years(1))  # --> [1, 15, 15]
print(human_years_cat_years_dog_years(2))  # --> [2, 24, 24]
print(human_years_cat_years_dog_years(10))  # --> [10, 56, 64]
