function aSum(pArr){
  return pArr.reduce(
      (acc, curr) => (acc + curr), 0);
}

function isPrime(refNumber){
  for(let j = 2; j <= (refNumber / 2); j++){
    if((refNumber % j) == 0){
      return false;
    }
  }  
  return true;
}

function sumPrimes(num) {

  let aPrime = [];

  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      aPrime.push(i);
    }
  }

  return aSum(aPrime);
}

sumPrimes(10);
