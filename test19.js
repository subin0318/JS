// let user = {
//     name: "jeado"
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor);

// let user2 = {};
// Object.defineProperty(user2, "name", { //defineProperty 해당 객체의 속성을 정의한다 
//     value: "jeado", // 속성의 값
//     enumerable: true, // for...in, Object.keys로 열거 가능 여부
//     configurable: true, // 속성을 삭제하거나 재정의 가능 여부
//     writable: false // 값을 수정 가능 여부
// });
// console.log(user2.name);
// user2.name = "bbo";
// console.log(user2.name);


// let user = {};
// Object.defineProperty(user, "age", {
//     get: function() {
//         return this._age;
//     },
//     set: function(age) {
//         if (age < 0) {
//             console.log('0보다 작은값은 올 수 없습니다.');
//         } else {
//             this._age = age;
//         }
//     },
//     enumerable: true
// });