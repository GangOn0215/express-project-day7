const points = [40, 100, 1, 5, 25 ,10, "aa"];
const sum = points.reduce((total, currentValue) => {
  console.log(currentValue);

  return total + currentValue;
}, 0);

console.log('sum: ', sum);