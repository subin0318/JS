function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

try{ // 에러를 잡고 
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) { // try -> 에러 -> catch 제어권을 넘김
    console.log(`에러가 발생했습니다 >>> ${e}`);
} finally { // 에러 상관없이 발생
    console.log('완료');
}