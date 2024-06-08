from abc import ABC,abstractmethod

class AbstractFactory(ABC):

    @abstractmethod
    def create_product_A(self):
        pass

    @abstractmethod
    def create_product_B(self):
        pass

