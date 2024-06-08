
from white_laptop import WhiteLaptop
from white_cellphone import WhiteCellPhone

from abstract_factory import AbstractFactory


class WhiteDevicesFactory(AbstractFactory):

    def create_product_A(self):
        return WhiteLaptop()

    def create_product_B(self):
        return WhiteCellPhone()