/**
 * 
 * Destructuring: 구조 분해 할당
 * Object에 저장된 데이터를 분해해서 필요한 데이터만 바로 추출해서 사용할 수 있도록 하는 object 내장 함수
 * 
 */

function getPerson() {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    email: "john@gmail.com",
    city: "New York",
    country: "USA"
  }
};

const {firstName, lastName, country} = getPerson();

console.log(firstName);         // John
console.log(lastName);          // Doe
console.log(country);           // USA

function displayFullName({firstName, lastName}) {
  console.log(`${firstName} ${lastName}`);        // John Doe
}

displayFullName(getPerson());   // John Doe