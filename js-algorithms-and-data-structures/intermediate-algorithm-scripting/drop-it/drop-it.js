function dropElements(arr, func) {
  return arr.reduce((acc, curr) => {
      if(acc.length > 0 || func(curr)){
        acc.push(curr)
      }
      return acc;
    },
    []
  );
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));