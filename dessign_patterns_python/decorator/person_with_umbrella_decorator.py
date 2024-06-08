from person_decorator import PersonDecorator


class PersonDecoratorUmbrella(PersonDecorator):

    def __init__(self, person):
        super().__init__(person)

    def talk(self):
        result = self._person.talk()
        result += ". Now I have an umbrella"
        return result

    def walk(self):
        result = self._person.walk()
        result += ". Now I have an umbrella"
        return result
