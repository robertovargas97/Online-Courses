
from black_laptop import BlackLaptop
from black_cellphone import BlackCellPhone

from abstract_factory import AbstractFactory

class BlackDevicesFactory(AbstractFactory):

    def create_product_A(self):
        return BlackLaptop()

    def create_product_B(self):
        return BlackCellPhone()
  
        