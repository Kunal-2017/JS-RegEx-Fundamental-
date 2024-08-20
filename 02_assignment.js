// Que2: Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

// Sol:
    function testRegex(pattern, str) {
    // Create a regular expression object from the pattern
    let regex = new RegExp(pattern);

    // Test if the string matches the pattern
    return regex.test(str);
    }

    // Testing the function with different patterns and strings
    console.log(testRegex('hello', 'hello world'));   // true
    console.log(testRegex('^hello', 'hello world'));  // true (checks if 'hello' is at the start)
    console.log(testRegex('world$', 'hello world'));  // true (checks if 'world' is at the end)
    console.log(testRegex('\\d+', 'There are 123 cats')); // true (checks for one or more digits)
    console.log(testRegex('dog', 'There are 123 cats'));  // false (no 'dog' in the string)

// Explanation:
//     testRegex(pattern, str): This function takes a regex pattern and a string as input. It creates a regular expression object using new RegExp(pattern) and checks if the string matches the pattern using regex.test(str). It returns true if there's a match, and false otherwise.

// Test Cases:

//     'hello' in 'hello world': Returns true because 'hello' is present.
//     '^hello' in 'hello world': Returns true because 'hello' is at the beginning.
//     'world$' in 'hello world': Returns true because 'world' is at the end.
//     '\\d+' in 'There are 123 cats': Returns true because the string contains digits.
//     'dog' in 'There are 123 cats': Returns false because 'dog' is not present in the string.