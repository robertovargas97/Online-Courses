from component import Component


class Squadron(Component):

    def __init__(self):
        self._children: List[Component] = []

    def shoot(self):
        for child in self._children:
            child.shoot()

    def add(self, soldier):
        self._children.append(soldier)

    def remove(self, soldier):
        self._children.remove(soldier)
