from cellphone import CellPhone

class WhiteCellPhone(CellPhone):
    
    def __init__(self):
        print("Creating white cell phone")

    def send_message(self):
        print("The white cell phone has sent a message")

    def call(self):
        print("The white cell phone is calling someone")
