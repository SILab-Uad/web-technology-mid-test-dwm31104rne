import { expect } from 'chai';
import { JSDOM } from 'jsdom';

// Mendefinisikan fungsi generatePassword secara global agar bisa diakses di dalam pengujian
global.generatePassword = function(length, options) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charset = '';
    if (options.includeLowercase) charset += lowercase;
    if (options.includeUppercase) charset += uppercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSpecialChars) charset += specialChars;

    if (charset.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

describe('Generator Password', () => {
    it('should generate a password with the specified length', () => {
        const options = {
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSpecialChars: true
        };
        const password = generatePassword(8, options);
        expect(password).to.have.lengthOf(8);
    });

    it('should return an empty string if no options are selected', () => {
        const options = {
            includeUppercase: false,
            includeLowercase: false,
            includeNumbers: false,
            includeSpecialChars: false
        };
        const password = generatePassword(8, options);
        expect(password).to.equal('');
    });
});
