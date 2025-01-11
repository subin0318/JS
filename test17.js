// var a = 10;
// console.log(a);

// function print() {
//     var b = 20;
//     // print() 함수에서 선언한 변수 b는 함수 스코프에 정의된 변수 b는 해당 함수 내에서만 접근이 가능하기떄문에
//     // 함수밖에서는 접근이 불가능하다 
//     if (true) {
//         var c = 30;
//     } // if 문안 블록에서 변수 c를 선언하고 블록 밖에서 c를 출력한다
//     console.log(c); // 함수 스코프에 정의한다
//     // print() 함수 내 어디에든 출력이 가능하다
// }

// print();
// // console.log(b);

// var a="함수"; // 전역 변수

// function print1() {
//     console.log(a); // 전역 변수 a를 출력
// }

// function print2() {
//     var a = "제 2함수"  // 지역 변수 선언
//     console.log(a); // 지역 변수 a를 출력
// }

// print1()
// print2()