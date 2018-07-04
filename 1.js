var array = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
}];
// Version ≤ 5.1
array.reduce(function (obj, current) {
    console.log(current.key);
    obj[current.key] = current.value;
    //truy câp thuoc tinh object obj['s']
    return obj;
}, {});