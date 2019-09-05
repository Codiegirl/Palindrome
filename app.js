palindrome("eye")

function palindrome(str) {
  var reversed = str.split("").reverse().join("")
 
  if (reversed === str)
  return true;
  return false;
}

palindrome("eye")

//remove everything that is not a letter or number with a regular expression or a sequence of characters that match a specific search pattern (RegexOne.com)
function palindrome(str) {
  var reg = /[\W_]/g//pattern
  var smallStr = str.toLowerCase().replace(reg, "")//replace with nothing
  console.log(smallStr)
  var reversed = smallStr.split("").reverse().join("")
 
  if (reversed === smallStr)
  return true;
  return false;
}

palindrome("eye")