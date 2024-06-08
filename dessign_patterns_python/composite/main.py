from squadron import Squadron
from soldier import Soldier


def main():
    soldier = Soldier()
    squadron = Squadron()
    squadron.add(soldier)
    squadron.add(soldier)
    squadron.add(soldier)

    soldier.shoot()
    print("Squadron: ")
    squadron.shoot()


if __name__ == "__main__":
    main()
