const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filteredWords = words.filter((word) => {
  // 단어의 길이가 6자리 보다 큰 단어만 추출해서 새로운 배열 반환
  return word.length > 6; 
})

console.log("filtered words, ", filteredWords);  // [ 'exuberant', 'destruction', 'present' ]

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
}];

// 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환
const filteredPointPersons = persons.filter((person) => {
  // person.point가 80점 이상일때 반환 해준다.
  return person.point >= 80;
});

const filteredCityPersons = persons.filter((person) => {
  // person.city가 '서울'일때 반환 해준다.
  return person.city === "서울";
})


/**
 * { name: '김종국', point: 92, city: '서울' }, 
 * { name: '하하',   point: 81, city: '서울' }
 */
console.log('filtered Point Persons, ', filteredPointPersons);

/**
 * { name: '유재석', point: 78, city: '서울' }, 
 * { name: '김종국', point: 92, city: '서울' }, 
 * { name: '하하',   point: 81, city: '서울' }
 */
console.log('filtered City Persons, ', filteredCityPersons);