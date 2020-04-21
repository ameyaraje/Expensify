const add = (a, b) => {
    return a+b;
}

test('add two numbers', () => {
    const result = add(5, 6);

    expect(result).toBe(11);
});