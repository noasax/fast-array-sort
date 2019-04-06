let comp: (_l: any, _r: any) => boolean;

const partition = (arr: any[], l: number = 0, r: number = arr.length - 1): number => {
  const pivot = l;

  let _l = l + 1;
  let _r = r;
  while (_l <= _r) {
    for (; _l <= r && arr[_l] < arr[pivot]; _l++);
    for (; _r > l && arr[_r] >= arr[pivot]; _r--);
    if (comp(_l, _r)) {
      [arr[_l], arr[_r]] = [arr[_r], arr[_l]];
    } else {
      [arr[pivot], arr[_r]] = [arr[_r], arr[pivot]];
    }
  }
  return _r;
};

const insertionSort = (arr: any[], l: number = 0, r: number = arr.length - 1): any[] => {
  for (let i = l + 1; i <= r; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= l && comp(value, arr[j]); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
};

const qsort = (arr: any[], l: number = 0, r: number = arr.length - 1): any[] => {
  if (r - l <= 50) {
    return insertionSort(arr, l, r);
  }

  const pivot: number = partition(arr, l, r);
  qsort(arr, l, pivot - 1);
  qsort(arr, pivot + 1, r);

  return arr;
};

const sort = (
  arr: any[],
  _comp = (_l: any, _r: any) => _l < _r,
  l: number = 0,
  r: number = arr.length - 1,
): any[] => {
  comp = _comp;
  return qsort(arr, l, r);
};

export = sort;
