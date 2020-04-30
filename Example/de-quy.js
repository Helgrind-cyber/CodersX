var sum = (num) => {
    var tong = 0;
    for (var i = 1; i <= num; i++) {
        tong += i;
    }
    return tong;
}
console.log(sum(100));

var sum2 = (num) => {
    if (num == 1) { return num };
    return num + sum2(num - 1);
}
console.log(sum2(100));
console.log('===================== Đệ quy nhị phân =====================');

// fibonaci
const fibo = (n) => {
    if (n <= 2) {
        return 1;
    } else {
        return (fibo(n - 1) + fibo(n - 1));
    }

}

console.log(fibo(10));
