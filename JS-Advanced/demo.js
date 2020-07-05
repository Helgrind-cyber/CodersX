function removeDuplicate(array) {
    // write code here...
    // var newArr = [];
    // return array.filter(function (x) {
    //     if (newArr.indexOf(x) == -1) {
    //         newArr.push(x);
    //         return true;
    //     }
    //     return false;
    // });
    return array.reduce((defaultValue, currentValue) => {
        let length = defaultValue.length;
        if (length === 0 || defaultValue[length - 1] !== currentValue) {
            defaultValue.push(currentValue);
        }
        return a;
    }, []);
}

removeDuplicate([1, 1, 2, 3, 3])
/**
 * - Nếu x không tồn tại trong mảng mới thì sẽ push nó vào
 */
