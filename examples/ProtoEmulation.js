const PrototypeChain = [{
	parent: true
}, {
	middle: true
}, {
	latest: true
}];

const myObject = {
	real: true
};

const accessorProxy = new Proxy(myObject, {
	get (target, prop, receiver) {
		let result;
		PrototypeChain.reverse().forEach(current => {
			if (result === undefined) {
				result = Reflect.get(current, prop);
			}
		});
		return result;
	}
});

Reflect.setPrototypeOf(myObject, accessorProxy);

console.log('myObject.real   : ', myObject.real);
console.log('myObject.latest : ', myObject.latest);
console.log('myObject.middle : ', myObject.middle);
console.log('myObject.parent : ', myObject.parent);