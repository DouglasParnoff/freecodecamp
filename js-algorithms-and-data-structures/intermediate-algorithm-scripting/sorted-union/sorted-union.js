function uniteUnique(...arr) {
  return [...new Set(
    arr.reduce((acc, curr) => {
          acc.push(...curr);
          return acc
    }, 
    ...[])
  )];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4]

