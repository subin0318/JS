function drawChart (width=200, height = 400) {
    console.log(`${width} X ${height}`);

}

drawChart()



function addNumbers(...numbers) {
    
    let total = 0;
    
    for (let number of numbers) {
        total += number; // 각 숫자를 더함
    }
    return total; // 총합을 반환
}

console.log(addNumbers(1, 2, 3)); // 6
console.log(addNumbers(4, 5, 6, 7)); // 22