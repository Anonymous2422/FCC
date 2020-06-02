function palindrome(str) {
  // 1. Converting string into alphanumeric string.
  str = str.match(/[a-zA-Z\d]+/ig).join('').toLowerCase()
  let end = str.length-1;

  // 2. Checking the string is palindrome or not. if yes then return "true"
  //otherwise return "false".
  let i = 0;
  while(i<=end)
  {
    if(str[i] != str[end])
    {
      return false
    }
    i++;
    end--;
  }
  return true

}
