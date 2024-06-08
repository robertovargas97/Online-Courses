class SimpleRobot:

    def __init__(self):
        self.robot_power = 80
        self.parts = []

    def attack (self):
        print('The robot has attacked with a power of 80')

    def list_parts (self):
        print(f"Robot parts: {', '.join(self.parts)}", end="")