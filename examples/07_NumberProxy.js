'use strict';

debugger;

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

console.log('proxy as a number: ' + proxyAsNumber);		// 5

debugger;

const whySymbolToPrimitive = {};

console.log(' look ! → ', 0 + whySymbolToPrimitive);

Object.setPrototypeOf(whySymbolToPrimitive, vectorObj);

try {
	whySymbolToPrimitive.valueOf();
} catch (error) {
	debugger;
	console.error(error);
}

debugger;

whySymbolToPrimitive[Symbol.toPrimitive] = function () {
	debugger;
	const toBeNumber = Object.getPrototypeOf(this);
	return toBeNumber.valueOf();
};

debugger;

console.log(0 + whySymbolToPrimitive);

debugger;