class RobotDirector:

    def __init__(self, builder):
        self.builder = builder

    def build_basic_robot(self):
        self.builder.produce_upper_body()
        self.builder.produce_head()

    def build_full_robot(self):
        self.builder.produce_upper_body()
        self.builder.produce_head()
        self.builder.produce_left_arm()
        self.builder.produce_right_arm()
        self.builder.produce_left_leg()
        self.builder.produce_right_leg()
