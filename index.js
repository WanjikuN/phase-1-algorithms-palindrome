function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let word1 = '';
  
    for( let j=word.length-1; j>=0; j-- ) {
      // Counts from last
      
      word1 += word[j]; 
    }
  console.log( word === word1);
  } 

isPalindrome("poop") 

/* 
  Add your pseudocode here
  convert word to lowercase
  declare an empty string
  loop through your word from last to first  while appending to the string
  if it equals our word, it's a palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
