from abc import ABC,abstractmethod

class Idevice(ABC) : 

    @abstractmethod
    def turn_on(self):
        pass
    
    @abstractmethod
    def turn_off(self):
        pass