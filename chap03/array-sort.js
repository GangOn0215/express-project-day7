const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

const points = [40, 100, 1, 5, 25, 10];

// ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
points.sort();

/**
 * 
 * 첫번째 요소와 두번째 요소를 비교
 * 만약 양수라면 두 요소의 위치를 바꾸고
 * 만약 음수라면 두 요소의 위치를 바꾸지 않습니다.
 * 
 * 40, 100, 1, 5, 25, 10
 * 
 * 음수 이므로 위치를 바꾸지 않습니다.
 * [ 40 - 100 : -60 ] -> 40, 100, 1, 5, 25, 10
 * 
 * 40, 100, 1, 5, 25, 10
 * 
 * 양수 이므로 위치를 바꿉니다.
 * [ 100 - 1 : 99 ] -> 40, 1, 100, 5, 25, 10
 * 
 * 40, 1, 100, 5, 25, 10
 * 
 * 양수 이므로 위치를 바꿉니다.
 * [ 100 - 5: 95 ] -> 40, 1, 5, 100, 25, 10
 * 
 * 40, 1, 5, 100, 25, 10
 * 
 * 양수 이므로 위치를 바꿉니다.
 * [ 100 - 25: 75 ] -> 40, 1, 5, 25, 100, 10
 * 
 * ...
 * 
 * 이렇게 반복하다보면 이런식으로 처리가 되게 됩니다.
 * 1, 5, 10, 25, 40, 100
 * 
 */

points.sort((a, b) => { return a - b; });
console.log(points);
 
 // 역순 정렬
points.sort((a, b) => { return b - a; });
console.log(points);

const persons = [{
    name: "유재석",
    point: 78,
    city: "서울"
  },
  {
    name: "김종국",
    point: 92,
    city: "서울"
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주"
  },
  {
    name: "하하",
    point: 81,
    city: "서울"
  }
];

// 객체 point 를 비교하여 정렬하는 코드
persons.sort((a, b) => {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});

console.log(persons); 