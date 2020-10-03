function checkDigits(arr){
  return (arr[0].length == 3 
    && arr[1].length == 3
    && arr[2].length == 4);
}

function checkNumbers(str){
  const regex = /\d{1,10}/g;
  const phoneArr = str.match(regex);
  let result = false;
  if(phoneArr.length == 1 && phoneArr[0].length == 10){
    result = true;
  } else if(phoneArr.length == 3) {
    result = checkDigits(phoneArr);
  } else if( phoneArr.length == 4) {
    result = phoneArr[0] == 1;
    if(result){
      result = checkDigits(phoneArr.slice(1));
    }
  }
  return result;  
}

function checkParenthesis(str){
  let strTrim = str.replace( /\s+/g, '');
  return ((strTrim.indexOf("(") == 0 && strTrim.indexOf(")") == 4)
      || (strTrim.indexOf("(") == 1 && strTrim.indexOf(")") == 5))

}

function telephoneCheck(str) {
  let result = checkNumbers(str);
  if(result){
    if(str.indexOf("(") >= 0 || str.indexOf(")") >= 0){
      result = checkParenthesis(str);
    }
  }
  return result;
}

console.log(telephoneCheck("555)-555-5555") == false);
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("(555)555-5555") == true);
console.log(telephoneCheck("555 555 5555") == true);
console.log(telephoneCheck("5555555555") == true);
console.log(telephoneCheck("1 555 555 5555") == true);