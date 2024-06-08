from laptop import Laptop

class BlackLaptop(Laptop):
    
    def __init__(self):
        print("Creating black laptop")

    def turn_on(self):
        print("Laptop on")

    def turn_off(self):
        print("Laptop off")
