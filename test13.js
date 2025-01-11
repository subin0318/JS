var obj = {a:1 , b:2, c:3, d:4, e:5};

var {a, c}= obj;

console.log(a); // 1
console.log(c); // 3

var {a:newA=10, f:newF=5} = obj;
console.log(`new A >>> ${newA}`);
console.log(`new F >>> ${newF}`);
console.log(obj);


var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr; // ... 나머지 변수 지시자
console.log(`0) b >>> ${b}`); 
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1]; 
console.log(`1) a >>> ${a}`); // a 가 1이됨 a값만 할당 받을수있다 [1] 값이 하나이기 때문이다
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) c >>> ${a}`); // 9
console.log(`2) c >>> ${f}`); // 1

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`); // 1
console.log(`3) f >>> ${f}`); // 6