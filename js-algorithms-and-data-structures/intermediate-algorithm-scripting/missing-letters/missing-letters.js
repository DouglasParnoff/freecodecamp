function fearNotLetter(str) {
  return str.split('')
    .reduce((acc, curr, index, arr) => {      
      const base = 'abcdefghijklmnopqrstuvwxyz';
      let nextBaseIndex = base.indexOf(curr) + 1;
      if(!acc 
        && (index + 1) < arr.length
        && (base.indexOf(arr[index + 1]) != nextBaseIndex)
      ){
        acc = base.charAt(nextBaseIndex);
      }
      return acc;
    }, undefined);
}

fearNotLetter("stvwx");

