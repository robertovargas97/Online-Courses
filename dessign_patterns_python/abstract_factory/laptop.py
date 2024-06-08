from abc import ABC,abstractmethod

class Laptop(ABC) : 

    @abstractmethod
    def turn_on(self):
        pass
    
    @abstractmethod
    def turn_off(self):
        pass