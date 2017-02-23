// const reduceRight = ([...arr], init, f) => arr.reverse().reduce(f, init);
// const reduceRight = (arr, init, f) => 
// 	arr.forEach((v, i, a) => init = f(init, a[a.length - ++i])) || init;

const reduceRight = ([...a], v, f) => {
	while(a.length) v = f(v, a.pop()); return v;
}

var reduceRightRecursive = ([...arr], init, f) => !arr.length ? init : reduceRightRecursive(arr, f(init, arr.pop()), f);
		