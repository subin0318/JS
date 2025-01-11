const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    } // 학생을 매개변수로 정의하고 있다 
      // teacherJay 객체는 student 객체를 사용한다
}

const studentBbo = {
    name: '뽀', // 이름 나이 경험치를 상태로 가지고 있다 
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}

console.log(studentBbo.exp); // 0
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp); //1

// const studentProto = {
//     gainExp: function() {
//         this.exp++;
//     }
// }

// const harin = {
//     name: '하린',
//     age: 10,
//     exp: 0,
//     __proto__: studentProto
// };

// const bbo = {
//     name: '뽀',
//     age: 20,
//     exp: 10,
//     __proto__: studentProto
// };

// bbo.gainExp(); // exp +1
// harin.gainExp(); // exp +2
// harin.gainExp();
// console.log(harin);
// console.log(bbo);