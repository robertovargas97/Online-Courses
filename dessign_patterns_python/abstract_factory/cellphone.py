from abc import ABC,abstractmethod

class CellPhone(ABC) : 

    @abstractmethod
    def send_message(self):
        pass
    
    @abstractmethod
    def call(self):
        pass