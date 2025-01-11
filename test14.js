const symbol = Symbol();
const hello = Symbol('hello');
// Symbol 값에 'hello' 값을 저장한다

console.log(Number(3) === Number(3));
// Number(3)은 기본 숫자 값인 3을 반환하므로 두 값은 동일합니다.
console.log(Symbol('symbol') === Symbol('symbol'));
// symbol() 은 호출 될때마다 고유한 Symbol 값을 생성하므로 두 Symbol은 동일하지 않는다 심볼은 절대 중복되지 않는다
console.log(Symbol() === Symbol());
//새로운 고유 Symbol 값이 생성되기 때문에 false가 나온다.
console.log(typeof Symbol());
// 문자열 "symbol"을 반환한다.

const nationility = Symbol('nationility');
// 새로운 Symbol 값을 생성하여 nationility 변수에 저장한다.
const user = {
    name : 'jay'
    // user 객체를 정의하며, 초기에는 name 속성만 가집니다.
};
user[nationility] = 'korean';
// Symbol nationility를 키로 사용하여 추가된 속성 값을 출력합니다.
console.log(user[nationility]);