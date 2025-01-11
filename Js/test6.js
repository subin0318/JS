var store = {snack: 1000, flower: 5000, beverage: 2000};

for (var item in store) {
    if(!store.hasOwnProperty(item)) continue;
// hasOwnProperty: item 에 key 값이 있는지 확인하는 메서드이다
    console.log(item + '는 가격이 ' + store[item] + ' 입니다.')
}