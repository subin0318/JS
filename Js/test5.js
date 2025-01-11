var hometown = [
    {name : '남준', place: '일산', city: '고양'},
    {name : '진', place: '과천'}, // city 라는 값이 없기 때문에 스킵을 한다
    {name : '호석', place: '광주', city: '전라도'},
    {name : '지민', place: '부산', city: '경상도'}
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;
    // h: 값이 할당 되지 않거나 or  h.city: city 라는 값이 할당 X

    console.log(i + ' 번째 실행입니다.');

    if(h.name === '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}