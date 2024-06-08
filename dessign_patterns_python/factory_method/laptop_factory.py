
from laptop import Laptop

from factory import Factory


class LaptopFactory(Factory):

    def create_product(self):
        return Laptop()

           
