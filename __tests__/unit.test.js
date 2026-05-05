// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test isPhoneNumber 
test('this is a valid phone number (949) 239-3433', () => {
    expect(isPhoneNumber('(949) 239-3433')).toBe(true);
});
test('this is a valid phone number 434-233-3445', () => {
    expect(isPhoneNumber('434-233-3445')).toBe(true);
});
test('this is not a valid phone number 6769893408', () => {
    expect(isPhoneNumber('6769893408')).toBe(false);
});
test('this is not a valid phone number heyyy', () => {
    expect(isPhoneNumber('heyyy')).toBe(false);
});


// Test isEmail 
test('this is a valid email hello@gmail.com', () => {
    expect(isEmail('hello@gmail.com')).toBe(true);
});
test('this is a valid email boo@yahoo.edu', () => {
    expect(isEmail('boo@yahoo.edu')).toBe(true);
});
test('this is not a valid email @gmail.com', () => {
    expect(isEmail('@gmail.com')).toBe(false);
});
test('this is not a valid email .com@', () => {
    expect(isEmail('.com@')).toBe(false);
});


// Test isStrongPassword 
test('this is a valid strong password hello123', () => {
    expect(isStrongPassword('hello123')).toBe(true);
});
test('this is a valid strong password YOO_421', () => {
    expect(isStrongPassword('YOO_421')).toBe(true);
});
test('this is not a valid strong password hey', () => {
    expect(isStrongPassword('hey')).toBe(false);
});
test('this is not a valid strong password 1922_hehe', () => {
    expect(isStrongPassword('1922_hehe')).toBe(false);
});


// Test isDate 
test('this is a valid date 2/19/2005', () => {
    expect(isDate('2/19/2005')).toBe(true);
});
test('this is a valid date 02/22/1954', () => {
    expect(isDate('02/22/1954')).toBe(true);
});
test('this is not a valid date 8 - 22 - 2006', () => {
    expect(isDate('8 - 22 - 2006')).toBe(false);
});
test('this is not a valid date 8/5/72', () => {
    expect(isDate('8/5/72')).toBe(false);
});


// Test isHexColor 
test('#FFF is a valid hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
});
test('#FF5733 is a valid hex color', () => {
    expect(isHexColor('#FF5733')).toBe(true);
});
test('#GGGGGG is not a valid hex color', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
});
test('123456789 is not a valid hex color', () => {
    expect(isHexColor('123456789')).toBe(false);
});