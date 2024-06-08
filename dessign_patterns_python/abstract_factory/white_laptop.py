from laptop import Laptop

class WhiteLaptop(Laptop):
    
    def __init__(self):
        print("Creating white laptop")

    def turn_on(self):
        print("Laptop on")

    def turn_off(self):
        print("Laptop off")
