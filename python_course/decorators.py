def my_decorator(func):

    def new_func(val, val2):
        if type(val) == type(val2):
            return func(val, val2)

        else:
            return func(str(val), str(val2))

    return new_func


@my_decorator
def concat(n_1, n_2):
    return n_1 + n_2


result = concat(1, 2)

result = concat("String", "Decorator")
