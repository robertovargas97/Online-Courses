class MyClass:
    # Class attribute, like a global attribute
    my_attribute = 0

    @classmethod
    def increase_my_attribute_global(cls):
        cls.my_attribute += 1

    @classmethod
    def get_my_attribute_global(cls):
        return cls.my_attribute

    def __init__(self) -> None:
        MyClass.increase_my_attribute_global()

    def increase_my_attribute(self):
        self.my_attribute += 1

    def get_my_attribute_instance_value(self):
        return self.my_attribute


a = MyClass()
b = MyClass()

print(a.my_attribute)
print(b.my_attribute)

a.increase_my_attribute()
b.increase_my_attribute_global()
b.increase_my_attribute_global()
b.increase_my_attribute_global()

print(a.get_my_attribute_global())
print(b.get_my_attribute_global())
print(a.get_my_attribute_instance_value())
