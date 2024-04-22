function isPalindrome(str) {
  // Convert the input string to lowercase
  str = str.toLowerCase();
  
  // Initialize pointers
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  
  // Iterate through the string
  while (leftPointer <= rightPointer) {
      // If characters at the pointers are not equal, it's not a palindrome
      if (str[leftPointer] !== str[rightPointer]) {
          return false;
      }
      // Move pointers towards each other
      leftPointer++;
      rightPointer--;
  }
  // If loop completes without returning false, it's a palindrome
  return true;
}

// Test cases
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('robot')); // false
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('ab')); // false

/*pseudo code
1. Define a function called isPalindrome that takes a string as input.
2. Initialize two pointers, leftPointer and rightPointer, at the start and end of the string respectively.
3. Convert the input string to lowercase.
4. While leftPointer is less than or equal to rightPointer:
    5. If the characters at leftPointer and rightPointer are not equal:
        6. Return false.
    7. Move leftPointer one position to the right.
    8. Move rightPointer one position to the left.
9. If the loop completes without returning false, return true.*/

// Test cases
Input: "madam"
Output: true

Input: "robot"
Output: false

Input: "racecar"
Output: true

Input: "a"
Output: true

Input: "ab"
Output: false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('robot')); // false
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('hello')); // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
