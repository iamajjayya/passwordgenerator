const slider = document.querySelector('.slider');
const length = document.querySelector('.length');

const includeUppercase = document.querySelector("#upper");
const includeLowercase = document.querySelector("#lower");
const includeNumber = document.querySelector("#number");
const includeSymbols = document.querySelector("#symbols");

const passwordDisplay = document.querySelector('.password');
const copy = document.querySelector('.password-copy');
const generateBtn = document.querySelector('.btn-generate');

slider.addEventListener("input", () => {
    length.textContent = slider.value;
});

const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const generatePassword = (options) => {
    let charset = '';

    if (options.uppercase) charset += characters.uppercase;
    if (options.lowercase) charset += characters.lowercase;
    if (options.numbers) charset += characters.numbers;
    if (options.symbols) charset += characters.symbols;

    if (charset.length === 0) {
        alert("Please select at least one character type.");
        return '';
    }

    let password = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length); 
        password += charset.charAt(randomIndex);
    }

    return password;
}

generateBtn.addEventListener('click', () => {
    const passwordOptions = {
        length: parseInt(slider.value, 10), 
        uppercase: includeUppercase.checked,
        lowercase: includeLowercase.checked,
        numbers: includeNumber.checked,
        symbols: includeSymbols.checked
    };

    const password = generatePassword(passwordOptions);
    passwordDisplay.textContent = password;
});
