/**
 * Sử dụng thuật toán nổi bọt để sắp xếp một mảng số theo thứ tự
 */
var arr = [1, 45, 3, 7, 3, 72, 7, 9];
console.log(arr);

for (var i = 0; i < (arr.length - 1); i++) {
    for (var j = (i + 1); j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }
}
console.log(arr);
