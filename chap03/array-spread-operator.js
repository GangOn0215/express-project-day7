const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3];
const arr3 = [...arr2, ...arr1];    // 배열의 데이토를 요소 하나하나로 모둗

console.log(arr3);

const cd = "CD";
const alphabet = ['A', 'B', ...cd];   // 문자열을 character 한자 한자 모두 분해해서 새로운 배열에 요소로 할당 
console.log(alphabet);