from context import Context
from credit_card_payment import CreditCardPayment
from paypal_payment import PaypalPayment


def main():

    context = Context(CreditCardPayment())
    context.execute()

    context = Context(PaypalPayment())
    context.execute()


if __name__ == '__main__':
    main()
