const greet = require("./functions")

test("test if it greets properly", () => {
    expect(greet()).toBe("Hello, world")
})