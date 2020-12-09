'use strict';

const vectorObj = new Number(5);

const proxyAsNumber = new Proxy(vectorObj, {
	get (target, prop) {
		if (prop === Symbol.toPrimitive) {
			return function (type) {
				// this -- proxy itself
				// type === 'default'
				// console.log('THIS', this === vectorObj, args);
				return vectorObj.valueOf();
			}
		}
		return target.valueOf();
	}
});

console.log(proxyAsNumber);
console.log(vectorObj);
console.log(proxyAsNumber === vectorObj);

try {
	console.log(0 + proxyAsNumber);		// 5
	console.log(2 + vectorObj);		// 7
} catch (error) {
	console.error(error);
}
console.log('' + proxyAsNumber);		// 5

debugger;