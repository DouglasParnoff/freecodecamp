function pairElement(str) {  
  return str.split('')
    .map((ipElement) => {
      let result = [];
      let base = [['A', 'T'], ['C', 'G']];
      base.forEach(
        (eBase) => {
          if(eBase.some((eBaseChild) => (eBaseChild == ipElement))){
            result.push(ipElement);
            result.push(eBase[ eBase.length - eBase.indexOf(ipElement) - 1]);
          }
        }        
      )
      return result;      
      });
}
pairElement("GCG");

