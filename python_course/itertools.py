import itertools

list_one = [1, 2, 3]
list_two = [4, 5, 6]

iterator = itertools.chain(list_one, list_two)

for i in iterator:
    print(i)


# Return the list the number of times that are specified in the repeat method
for number in itertools.repeat(list_one, times=2):
    print(number)

# Iterate over the same list the number of specified times
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
iterator = iter(my_list)
tee = itertools.tee(iterator, 5)
for value in tee:
    print(value)

# permutations & combinations
the_list = [1, 2, 3, 4]
print(list(itertools.permutations(the_list, 2)))
print(list(itertools.combinations(the_list, 2)))
