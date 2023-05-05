const app = require('./app')

test("properly adds two numbers", () => {
    expect(app.Sum(1, 2)).toBe(3)
})

test("properly subtracts two numbers", () => {
    expect(app.Subtract(1, 2)).toBe(-1)
})