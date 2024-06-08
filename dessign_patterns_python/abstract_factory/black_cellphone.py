from cellphone import CellPhone

class BlackCellPhone(CellPhone):
    
    def __init__(self):
        print("Creating black cell phone")

    def send_message(self):
        print("The black cell phone has sent a message")

    def call(self):
        print("The black cell phone is calling someone")
