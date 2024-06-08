from abc import ABC, abstractmethod, abstractproperty

class Builder(ABC):

    @abstractmethod
    def produce_upper_body(self):
        pass

    @abstractmethod
    def produce_head(self):
        pass

    @abstractmethod
    def produce_left_arm(self):
        pass

    @abstractmethod
    def produce_right_arm(self):
        pass

    @abstractmethod
    def produce_left_leg(self):
        pass

    @abstractmethod
    def produce_right_leg(self):
        pass
