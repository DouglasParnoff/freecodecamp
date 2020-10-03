const data = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
     90: "XC",
     50: "L",
     40: "XL",
     10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
};

// the Object.key order the result
// as json stores string, we need to map the keys parsed to int

function getSmallerOrEqual(base, intDataKeys){
  return intDataKeys
    .reduce((smallerOrEqual, current) =>{
    if(current <= base){
      smallerOrEqual = current;
    }
    return smallerOrEqual;
  }, base); 
}

function convertToRoman(num) {
  
  let result = getSmallerOrEqual(num, 
    Object.keys(data).map((o)=>(Number(o))));

  if( num == 0 || result == num ) {
    return data[result];
  }

  return data[result] + convertToRoman(num-result); 
}

console.log(convertToRoman(40));
