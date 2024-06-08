from man import Man
from person_with_sweater_decorator import PersonDecoratorSweater
from person_with_umbrella_decorator import PersonDecoratorUmbrella


def main():

    man = Man("Roberto", 23)
    print(man.talk())
    print(man.walk())

    man_with_sweater = PersonDecoratorSweater(man)
    print(man_with_sweater.walk())
    print(man_with_sweater.talk())

    man_with_sweater_and_umbrella = PersonDecoratorUmbrella(man_with_sweater)
    print(man_with_sweater_and_umbrella.walk())


if __name__ == '__main__':
    main()
