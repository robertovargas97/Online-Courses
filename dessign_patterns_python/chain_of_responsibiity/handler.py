from abc import ABC, abstractmethod

class Handler(ABC):

    def __init__(self, successor=None):
        self._successor = successor

    @abstractmethod
    def handle_request(self, request):
        pass
