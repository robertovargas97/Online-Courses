from handler import Handler


class MonkeyHandler(Handler):

    def __init__(self, next_handler=None):
        super().__init__(next_handler)

    def handle_request(self, request):
        try:
            if request == "banana":
                print(f"Monkey: I'll eat the {request}")
            else:
                print(f"Monkey : I don't like {request}")
                self._successor.handle_request(request)

        except Exception:
            print("There is no handler for this request")
