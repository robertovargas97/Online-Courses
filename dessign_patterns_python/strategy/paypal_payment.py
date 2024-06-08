from i_strategy import Istrategy

class PaypalPayment(Istrategy):

    def __init__(self):
        pass
    
    def execute(self):
        print("The client chose paypal to pay")