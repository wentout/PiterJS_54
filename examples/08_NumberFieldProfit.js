
debugger;

const a = new Number(100);
a.subtract = function (b) {
	return this.valueOf() - b;
};
console.log(a.subtract(10));	// 90
console.log(a - 10);		// 90
console.log(a - 10); 		// 90
console.log(a - 10); 		// guess

debugger;