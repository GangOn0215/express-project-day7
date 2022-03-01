function getScores() {
  return [70, 80, 90, 100];
}

// const [x, y, z] = getScores();

// console.log(x); // 70
// console.log(y); // 80
// console.log(z); // 90

function getCoordinates() {
  return [ 37.566536, 126.977966 ]
}

const [latitude, longitude] = getCoordinates();

console.log(latitude);   // 위도
console.log(longitude);  // 경도

const [x, y, ...scores] = getScores();

console.log(scores);

function getProfile() {
  return [
    'John',
    'Doe',
    ['Red', 'Green', 'Blue']
  ];
}

const [firstName, lastName, [co1, co2, co3]] = getProfile();

console.log(firstName);
console.log(lastName);
console.log(co1, co2, co3);