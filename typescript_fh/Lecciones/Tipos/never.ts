(() => {
    const error = (message: string): never => {
        throw new Error(message);
    };

    error("This is an error.");

    console.log("Second")


})();
