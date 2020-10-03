function aSum(pFibonacci){
  return pFibonacci.reduce(
      (acc, curr) => (acc + curr), 0);
}
function sumFibs(num) {

  let aFibonacci = [0, 1];
  let result = 0;

  while(true){
    let newNum = aFibonacci[aFibonacci.length - 1] + aFibonacci[aFibonacci.length - 2];
    if(newNum <= num){
      aFibonacci.push(newNum);
      result = aSum(aFibonacci.filter((n) => (n % 2 !== 0)));      
    }else{
      break;
    }  
  }
  return result;
}

console.log(sumFibs(75024));