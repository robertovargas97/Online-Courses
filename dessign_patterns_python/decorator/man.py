from i_person import Iperson


class Man(Iperson):

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def talk(self):
        return f"My name is {self.name} and I am {self.age} years old"

    def walk(self):
        return f"My name is {self.name} and I am walking"
