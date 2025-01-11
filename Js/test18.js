hello();
function hello() {
    console.log("안녕하세요.");
}

hello2(); // 오류
var hello2 = function() {
    console.log("안녕하세요.");
}
// 변수에 함수를 할당하는 방식에는 호이스팅은 되지만 할당은 나중에 실행된다 호이스팅 변수선언 O 함수 X  