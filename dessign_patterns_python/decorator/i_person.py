from abc import ABC, abstractmethod


class Iperson(ABC):

    @abstractmethod
    def talk(self):
        pass

    @abstractmethod
    def walk(self):
        pass
