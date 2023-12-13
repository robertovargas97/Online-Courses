
describe('DemoComponent Tests', () => {

    test("This is a unit test", () => {

        // Arrange
        const message = "Hello";

        // Action
        const result = message.trim();

        // Assert
        expect(message).toBe(result);
    });

});

