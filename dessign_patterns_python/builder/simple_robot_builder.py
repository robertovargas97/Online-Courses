from builder import Builder
from simple_robot import SimpleRobot


class SimpleRobotBuilder(Builder):

    def __init__(self):
        self.robot = SimpleRobot()

    def produce_upper_body(self):
        self.robot.parts.append('Upper Body')

    def produce_head(self):
        self.robot.parts.append('Head')

    def produce_left_arm(self):
        self.robot.parts.append('Left arm')

    def produce_right_arm(self):
        self.robot.parts.append('Right arm')

    def produce_left_leg(self):
        self.robot.parts.append('Left leg')

    def produce_right_leg(self):
        self.robot.parts.append('Right  Leg')
