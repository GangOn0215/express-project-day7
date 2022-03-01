/**
 * 
 * Array.property.map();
 * map() 함수는 배열의 데이터가 Object 형일때,
 * 배열에 담긴 Object를 새로운 형태의 Object로 변환해서 배열로 반환
 * 
 */

const userList = [{
  firstName: "Emma",
  lastName: "Watson",
  email: "emwa@gmail.com"
},
{
  firstName: "Hannah",
  lastName: "Spearr",
  email: "hasp@gmail.com"
},
{
  firstName: "Sakura",
  lastName: "Miko",
  email: "sami@gmail.com"
},
{
  firstName: "Obi-Wan",
  lastName: "Kenobi",
  email: "obke@gmail.com"
}];

console.log('userList, ', userList);

const userList2 = userList.map((user) => {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  }
})

console.log('userList2, ', userList2);