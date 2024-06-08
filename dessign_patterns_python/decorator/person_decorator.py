from i_person import Iperson


class PersonDecorator(Iperson):

    def __init__(self, person):
        self._person = person

    def talk(self):
        return self._person.talk()

    def walk(self):
        return self._person.walk()
