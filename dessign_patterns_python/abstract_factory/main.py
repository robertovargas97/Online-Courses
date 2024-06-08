from abstract_factory import AbstractFactory
from factory_producer import FactoryProducer

def main():

    factory = FactoryProducer.get_factory('black')
    
    product_A = factory.create_product_A()
    product_B = factory.create_product_B()
    print(product_A)
    print(product_B)

    print()

    factory = FactoryProducer.get_factory('white')
    product_A = factory.create_product_A()
    product_B = factory.create_product_B()

    print(product_A)
    print(product_B)


if __name__ == '__main__':
    main()
    