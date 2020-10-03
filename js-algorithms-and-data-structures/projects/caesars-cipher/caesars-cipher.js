function rot13(str) {
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

  const isTheLastChar = (c, base) => {
    return (base.length - 1) === base.indexOf(c);
  }

  return str
    .split("")
    .reduce(
      (result, current) => {
        let index = base.indexOf(current);
        let newChar;
        if(index < 0){
          newChar = current;
        }else{
          newChar = base.charAt((index + 13) % base.length);
        }
        result += newChar;
        return result;
      }, 
      ""
    );
}

console.log(rot13("SERR PBQR PNZC"));
