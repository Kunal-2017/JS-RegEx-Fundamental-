//  Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.

function extractDateComponents(pattern, str) {
    // Execute the regex pattern on the string
    const match = pattern.exec(str);
    
    // Check if there's a match and extract groups
    if (match) {
      // Extracting the groups: day, month, year
      const day = match[1];
      const month = match[2];
      const year = match[3];
  
      return { day, month, year };
    } else {
      return null; // No match found
    }
  }
  
  // Testing the function with a date pattern
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/; // Pattern for DD-MM-YYYY format
  const testString = "The event is on 15-08-2024.";
  const result = extractDateComponents(datePattern, testString);
  
  if (result) {
    console.log("Day:", result.day);      // "15"
    console.log("Month:", result.month);  // "08"
    console.log("Year:", result.year);    // "2024"
  } else {
    console.log("No match found.");
  }
//   Explanation:
//   Regex Pattern:
  
//   (\d{2})-(\d{2})-(\d{4}): This pattern is designed to match a date in the DD-MM-YYYY format.
//   (\d{2}): Captures two digits for the day.
//   (\d{2}): Captures two digits for the month.
//   (\d{4}): Captures four digits for the year.
//   The hyphens - are used to separate the day, month, and year.
//   pattern.exec(str):
  
//   The exec() method executes the regex pattern on the string and returns an array of matched groups if there’s a match.
//   If no match is found, it returns null.
//   Group Extraction:
  
//   match[1]: Contains the day.
//   match[2]: Contains the month.
//   match[3]: Contains the year.
//   The function returns an object with these components or null if no match is found.
//   Test Case:
  
//   Input: "The event is on 15-08-2024."
//   Pattern: The regex pattern for matching dates in DD-MM-YYYY format.
//   Output:
//   Day: "15"
//   Month: "08"
//   Year: "2024"  