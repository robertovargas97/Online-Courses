from monkey_handler import MonkeyHandler
from turtle_handler import TurtleHandler

if __name__ == "__main__":
    food = ['lettuce','banana','apple']

    turtle = TurtleHandler()
    monkey = MonkeyHandler(turtle)

    monkey.handle_request(food[0])
    print()
    monkey.handle_request(food[2])
