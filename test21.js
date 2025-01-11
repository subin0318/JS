function Teacher(name, age, subject) { // 생성자 함수 Teacher
    this.name = name;
    this.age = age;
    this.subject = subject; // this 로 지정
    this.teach = function(student) {
        console.log(student + '에게' + this.subject + '를 가르칩니다.');
    };
}

const jay = new Teacher('jay', 30, 'Javascript'); // 이름 나이 고모
console.log(jay);
jay.teach('bbo');