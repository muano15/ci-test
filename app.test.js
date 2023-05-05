const app = require('./app')

test("properly adds two numbers", () => {
    expect(app.Sum(1, 2)).toBe(3)
    expect(app.Sum(4, 7)).not.toBe(11)
})

test("properly subtracts two numbers", () => {
    expect(app.Subtract(1, 2)).toBe(-1)
    expect(app.Subtract(9, 2)).not.toBe(7)
})