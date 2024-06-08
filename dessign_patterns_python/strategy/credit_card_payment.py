from i_strategy import Istrategy

class CreditCardPayment(Istrategy):

    def __init__(self):
        pass
    
    def execute(self):
        print("The client chose their credit card to pay")
