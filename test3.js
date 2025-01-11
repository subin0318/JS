var subject = '자바스크립트';
switch(subject) {                                         
    case 'C언어': // 1
        console.log('초보자를 위한 C++ 200제');
        break;
    case '자바스크립트': //2
        console.log('초보자를 위한 자바스크립트 200제');
        // 해당 case 값이 일치하면 빠져나온다
        break;
    case '파이썬': //3
        console.log('초보자를 위한 파이썬 200제');
        break;
    default: // default
        console.log('이젠 초보자가 아닙니다');
        break;
}

// 일치하는 값이 나올떄 까지 1 -> 2 -> 3 -> default 순으로 case 문을 확인한다