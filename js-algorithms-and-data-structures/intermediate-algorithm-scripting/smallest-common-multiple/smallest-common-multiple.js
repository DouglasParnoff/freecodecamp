function smallestCommons(arr) {
  let baseArr = arr.sort((a, b) => a - b);
  let commonMultiple = baseArr[baseArr.length - 1];
  let notFound = false;

  do{
    
    for(let i = baseArr[0]; i <= baseArr[baseArr.length - 1]; i++){
      
      if(commonMultiple % i != 0){
        notFound = true;
        commonMultiple++;
        break;
      }       
      if(i == baseArr[baseArr.length - 1]){
        notFound = false;
      }
    }
  } while(notFound);

  return commonMultiple;
}


console.log(smallestCommons([2,10]));
