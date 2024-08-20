// Que3: Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

// Sol:
function findCharacterClasses(str) {
  // Regular expressions for different character classes
  const digitPattern = /\d/g;                // Digits (0-9)
  const uppercasePattern = /[A-Z]/g;         // Uppercase letters (A-Z)
  const lowercasePattern = /[a-z]/g;         // Lowercase letters (a-z)
  const specialCharPattern = /[^a-zA-Z0-9]/g; // Special characters (anything except letters and digits)

  // Finding matches
  const digits = str.match(digitPattern) || [];
  const uppercaseLetters = str.match(uppercasePattern) || [];
  const lowercaseLetters = str.match(lowercasePattern) || [];
  const specialChars = str.match(specialCharPattern) || [];

  // Returning the matches
  return {
    digits,
    uppercaseLetters,
    lowercaseLetters,
    specialChars
  };
}

// Test the function with a sample string
const testString = "Hello World! 1234 #$%";
const result = findCharacterClasses(testString);

console.log("Digits:", result.digits);                    // [ '1', '2', '3', '4' ]
console.log("Uppercase Letters:", result.uppercaseLetters); // [ 'H', 'W' ]
console.log("Lowercase Letters:", result.lowercaseLetters); // [ 'e', 'l', 'l', 'o', 'o', 'r', 'l', 'd' ]
console.log("Special Characters:", result.specialChars);    // [ ' ', '!', ' ', '#', '$', '%' ]


// Explanation:
// Character Classes:

// \d: Matches any digit (0-9).
// [A-Z]: Matches any uppercase letter (A-Z).
// [a-z]: Matches any lowercase letter (a-z).
// [^a-zA-Z0-9]: Matches any character that is not a letter (uppercase or lowercase) or a digit. This effectively matches special characters.
// str.match(pattern):

// This method searches the string for matches to the specified regex pattern.
// The g flag ensures that all matches are returned.
// If no match is found, match() returns null, so || [] is used to return an empty array instead.
// Test Case:

// The string "Hello World! 1234 #$%" contains digits, uppercase letters, lowercase letters, and special characters.
// The function returns arrays containing the matches for each character class.


