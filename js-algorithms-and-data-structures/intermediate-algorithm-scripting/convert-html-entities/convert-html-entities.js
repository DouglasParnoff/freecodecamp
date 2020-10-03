function convertHTML(str) {
  const baseMap = [
    {'key': '&', 'value': '&amp;'}, 
    {'key': '<', 'value': '&lt;'}, 
    {'key': '>', 'value': '&gt;'}, 
    {'key': '"', 'value': '&quot;'},
    {'key': '\'', 'value': '&apos;'},
    ];
  return str.split("")
    .map((word) => {
      let valueFound = baseMap
        .filter((o) => (o['key'] === word))
        .map((o) => (o['value']))
        .join();
      if(!valueFound){
        valueFound = word;
      }
      return valueFound;
    })
    .join("");
}

console.log(convertHTML("Schindler's List"));
