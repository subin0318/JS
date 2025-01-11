var obj = {}; // 객체를 변수 obj에 대입한다

for (var i=0; i<10; i++) {
    obj['key'+i]=i;
}
// 변수 i가 0부터 9까지 반복하는 for 반복문을 작성

console.log(obj); // 속성 접근자 [] 를 활용하여 계산된 속성명을 정의

var profile = 'chloe:30'; 
// 문자열 'chloe:30' 을 변수 profile 대입한다
// profile 의 값 'chloe:30'으로 평가됩니다
var person = { // 객체 리터럴을 사용하여 person을 생성합니다 
    [profile] : true, 
    // 'chloe:30'이라는 속성이 추가되고, 값은 true입니다
    [profile.split(':')[0]] : profile.split(':')[1]
    //profile.split(':')[0]은 'chloe'이고, profile.split(':')[1]은 '30'입니다.
};
console.log(person); 