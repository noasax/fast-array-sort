function partition(arr: Array<any>, l: number = 0, r: number = arr.length - 1): number {
	const pivot = l;

	let _l = l + 1, _r = r;
	while(_l <= _r){
		for(; _l <= r && arr[_l] < arr[pivot]; _l++);
		for(; _r > l && arr[_r] >= arr[pivot]; _r--);
		if(_l > _r){
			[arr[pivot], arr[_r]] = [arr[_r], arr[pivot]];
		} else{
			[arr[_l], arr[_r]] = [arr[_r], arr[_l]];
		}
	}
	return _r;
}

function sort(arr: Array<any>, l: number = 0, r: number = arr.length - 1): Array<any> {
	if(r - l <= 0) {
		return arr;
	}

	const pivot: number = partition(arr, l, r);
	sort(arr, l, pivot - 1);
	sort(arr, pivot + 1, r);

	return arr;
}

export = sort;

