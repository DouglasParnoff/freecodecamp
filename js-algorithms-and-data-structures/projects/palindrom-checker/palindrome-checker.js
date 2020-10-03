function revert(myString){
  if(!myString || myString === "")
    return "";
  else
    return revert(myString.substr(1)) + myString[0];
}

// roles to clear:
// ignore spaces
// just alphanumeric
// compare ignoring case
function clear(str){
  let regex = /[^0-9a-z]/gi;
  return str
    .split(" ")
    .join()
    .replace(regex, '')
    .toLowerCase() 
  ;
}

function palindrome(str) {  
  return clear(str) === revert(clear(str));
}

console.log(palindrome("_eye"));