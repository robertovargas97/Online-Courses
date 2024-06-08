from singleton import Singleton


def main():

    singleton_1 = Singleton.getInstance()
    print(singleton_1)

    singleton_2 = Singleton.getInstance()
    print(singleton_2)


if __name__ == '__main__':
    main()
