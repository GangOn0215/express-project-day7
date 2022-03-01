/**
 * 
 * Array.property.includes()
 * 해당 Array 안에 해당 값이 존재 하는지 확인하는 배열 내장 함수
 * 
 * 
 */

const numbers = [1, 2, 3, 4, 5];
const dates = [
  '2022-02-28',
  '2022-03-01',
  '2022-03-02',
  '2022-03-03',
  '2022-03-04',
  '2022-03-05',
]
const objectDatas = [
  { id: 12, name: "John", age: 20 },
  { id: 15, name: "Pico", age: 15},
  { id: 20, name: "Tomato", age: 21}
]

console.log(numbers.includes(3));           // true
console.log(dates.includes('2022-03-03'));  // true
console.log(dates.includes('2022-03-06'));  // false
console.log(objectDatas.find(x => x.id === 20));