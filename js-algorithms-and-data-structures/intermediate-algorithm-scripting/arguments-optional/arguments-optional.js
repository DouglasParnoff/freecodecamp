function canSum(acc, curr){
  return (
    typeof(acc) != "undefined" && 
    typeof curr === "number");
}

function isASingleNumber(arr){
  return (arr.length === 1);
}

function addTogether() {  
  return Array.from(arguments)
    .reduce((accumulator, current, i, arr) => {
      if(canSum(accumulator, current)){
        if(isASingleNumber(arr)){
          accumulator = 
            function(next, curr = current) {
              let result;
              if(canSum(curr, next)){
                result = curr + next;
              } else {
                result = undefined;
              }
              return result;
            }
        } else {
          accumulator += current;
        }        
      }else{
        accumulator = undefined;
      }
      return accumulator;
    },
    0);
}

addTogether(2,3);
