const { validatePassword } = require('./exercises-1.js');
const { replaceDotWithHyphen } = require('./exercises-1.js');
const { getLetterAlphabetPosition } = require('./exercises-1.js');

/*
    Here are the tests for the exercises,
    you don't need to modify or understand this code
*/

/*
    Validate Password Tests
    -----------------------------------------------------------------
*/
test('Password should start with a capital letter', () => {
    const validPassword = 'Abc45defG';
    const result = validatePassword(validPassword);
    expect(result[0]).toBe(result[0].toUpperCase());
});

test('Password should end with a capital letter', () => {
    const validPassword = 'Abc45defG';
    const result = validatePassword(validPassword);
    expect(result[result.length - 1]).toBe(
        result[result.length - 1].toUpperCase()
    );
});

test('Password should have the third character a lowercase letter letter', () => {
    const validPassword = 'Abc45defG';
    const result = validatePassword(validPassword);
    expect(result[2]).toBe(result[2].toLowerCase());
});

test('Password should contain exactly two digits', () => {
    const validPassword = 'Abc45defG';
    const result = validatePassword(validPassword);
    const digitCount = result.split('').filter(char => /\d/.test(char)).length;
    expect(digitCount).toBe(2);
});

test('Password should be at least 8 characters long', () => {
    const validPassword = 'Abc45defG';
    const result = validatePassword(validPassword);
    expect(result.length).toBeGreaterThanOrEqual(8);
});

const validPasswords = ['Abc45defG', 'Abc45ddfdfefG', 'C2c5gGfA', 'Zzz77zzzZ'];

for (let password of validPasswords) {
    test(`Valid password "${password}" should return the password`, () => {
        const isValid = validatePassword(password);
        expect(isValid).toBe(password);
    });
}

test('Invalid password should return false', () => {
    const invalidPassword = 'invalid';
    const isValid = validatePassword(invalidPassword);
    expect(isValid).toBe(false);
});

/*
    Replace Dot Tests
    -----------------------------------------------------------------
*/

test('should replace a single dot with a hyphen', () => {
    const input = 'hello.world';
    const expectedOutput = 'hello-world';
    const result = replaceDotWithHyphen(input);
    expect(result).toBe(expectedOutput);
});

test('should replace multiple dots with hyphens', () => {
    const input = 'a.b.c.d';
    const expectedOutput = 'a-b-c-d';
    const result = replaceDotWithHyphen(input);
    expect(result).toBe(expectedOutput);
});

test('should not replace anything if there are no dots', () => {
    const input = 'no-dots';
    const expectedOutput = 'no-dots';
    const result = replaceDotWithHyphen(input);
    expect(result).toBe(expectedOutput);
});

test('should return position 1 for letter "A"', () => {
    const letter = 'A';
    const position = getLetterAlphabetPosition(letter);
    expect(position).toBe(1);
});

test('should return position 2 for letter "B"', () => {
    const letter = 'B';
    const position = getLetterAlphabetPosition(letter);
    expect(position).toBe(2);
});

test('should return position 26 for letter "Z"', () => {
    const letter = 'Z';
    const position = getLetterAlphabetPosition(letter);
    expect(position).toBe(26);
});
