my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

square_list = list(map(lambda number: number**2, my_list))


filtered_numbers = list(
    filter(lambda number: True if number % 2 == 0 else False, my_list)
)

print(square_list)
print(filtered_numbers)
