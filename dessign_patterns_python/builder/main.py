
from robot_director import RobotDirector
from simple_robot_builder import SimpleRobotBuilder


def main():

    builder = SimpleRobotBuilder()
    director = RobotDirector(builder)

    print("Basic robot")
    director.build_basic_robot()
    builder.robot.list_parts()

    print("\n\nFull robot")
    builder_2 = SimpleRobotBuilder()
    director = RobotDirector(builder_2)
    director.build_full_robot()
    builder_2.robot.list_parts()


if __name__ == '__main__':
    main()
