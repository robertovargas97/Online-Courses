from laptop_factory import LaptopFactory

def main():

    factory = LaptopFactory()

    new_laptop = factory.create_product()

    new_laptop.turn_on()
    new_laptop.turn_off()
    

if __name__ == '__main__':
    main()
    