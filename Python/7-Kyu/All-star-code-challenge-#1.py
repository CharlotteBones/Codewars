# All star code challenge #1
def sum_ppg(player_one, player_two):

    return player_one['ppg'] + player_two['ppg']


# Test

iverson = { 'team': '76ers', 'ppg': 11.2 }
jordan =  { 'team': 'bulls', 'ppg': 20.2 }

print(sum_ppg(iverson, jordan))  # --> 31.4
