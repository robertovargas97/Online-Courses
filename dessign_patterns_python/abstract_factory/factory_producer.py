
from white_devices_factory import WhiteDevicesFactory
from black_devices_factory import BlackDevicesFactory


class FactoryProducer:
    @staticmethod
    def get_factory(factory_type):
        if factory_type == 'black':
            return BlackDevicesFactory()

        elif factory_type == 'white':
            return WhiteDevicesFactory()
