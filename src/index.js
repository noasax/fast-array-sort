"use strict";
function partition(arr, l = 0, r = arr.length - 1) {
    const pivot = l;
    let _l = l + 1, _r = r;
    while (_l <= _r) {
        for (; _l <= r && arr[_l] < arr[pivot]; _l++)
            ;
        for (; _r > l && arr[_r] >= arr[pivot]; _r--)
            ;
        if (_l > _r) {
            [arr[pivot], arr[_r]] = [arr[_r], arr[pivot]];
        }
        else {
            [arr[_l], arr[_r]] = [arr[_r], arr[_l]];
        }
    }
    return _r;
}
function insertionSort(arr, l = 0, r = arr.length - 1) {
    for (let i = l; i <= r; i++) {
        let value = arr[i];
        let j = i - 1;
        for (; j >= l && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}
function sort(arr, l = 0, r = arr.length - 1) {
    if (r - l <= 0) {
        return arr;
    }
    if (r - l <= 50) {
        return insertionSort(arr, l, r);
    }
    const pivot = partition(arr, l, r);
    sort(arr, l, pivot - 1);
    sort(arr, pivot + 1, r);
    return arr;
}
module.exports = sort;
