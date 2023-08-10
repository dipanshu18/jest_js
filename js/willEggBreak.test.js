const isBreak = require("./willEggBreak");

test("Will Egg Break", () => {
    expect(isBreak(50)).toBe(true);
    expect(isBreak(2)).toBe(false);
    expect(isBreak(67)).toBe(true);
    expect(isBreak(99)).toBe(true);
    expect(isBreak(20)).toBe(false);
    expect(isBreak(47)).toBe(true);
})
