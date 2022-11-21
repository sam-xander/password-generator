// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
let passLength = "";
let useLowercase = "";
let useUppercase = "";
let useNumbers = "";
let useSpecial = "";

function getPasswordOptions() {
  while (!passLength || passLength < 10 || passLength > 64) {
    passLength = prompt(
      "How long do you want the password to be?\n[Pick between 10 - 64 characters]"
    );

    if (!passLength) {
      alert("You need to enter the password length to continue.");
    } else if (passLength < 10 || passLength > 64) {
      alert("You need to enter the password length between 10 and 64.");
    }
  }

  while (!(useLowercase || useUppercase || useNumbers || useSpecial)) {
    useLowercase = confirm("Do you want to include lowercase characters?");
    useUppercase = confirm("Do you want to include uppercase characters?");
    useNumbers = confirm("Do you want to include number characters?");
    useSpecial = confirm("Do you want to include special characters?");

    if (!(useLowercase || useUppercase || useNumbers || useSpecial)) {
      alert("You need to pick at least one character option.");
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

// Function to generate password with user input

function generatePassword() {
  getPasswordOptions();

  let characterTypes = [];

  if (useLowercase) {
    characterTypes.push(...lowerCasedCharacters);
  }
  if (useUppercase) {
    characterTypes.push(...upperCasedCharacters);
  }
  if (useNumbers) {
    characterTypes.push(...numericCharacters);
  }
  if (useSpecial) {
    characterTypes.push(...specialCharacters);
  }

  let password = "";

  for (let i = 0; i < passLength; i++) {
    password += getRandom(characterTypes);
  }
  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  const password = generatePassword();

  passwordText.value = password;

  // Resets
  passLength = "";
  useLowercase = false;
  useUppercase = false;
  useNumbers = false;
  useSpecial = false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
