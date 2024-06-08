from i_device import Idevice

class Laptop(Idevice):
    
    def __init__(self):
        print("Creating laptop")

    def turn_on(self):
        print("Laptop on")

    def turn_off(self):
        print("Laptop off")
