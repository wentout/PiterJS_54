// back to the 1995
// we can see constructor definition
// made like this

debugger;

var TheConstructor = function () {
	this;
	debugger;
};

debugger;

var instance = new TheConstructor;


// show the props
debugger;

TheConstructor.prototype;
debugger;

instance.constructor.prototype;
debugger;

// back to 2020
console.log(
	instance.constructor
	===
	TheConstructor
); // true

console.log(
	instance.constructor.prototype
	===
	TheConstructor.prototype
); // true

console.log(
	Object.getPrototypeOf(instance)
	===
	TheConstructor.prototype
); // true


debugger;
// ???
console.log(
	instance.constructor.prototype.constructor
	===
	TheConstructor
); // true

debugger;
console.log(
	instance.constructor.prototype.constructor
	===
	TheConstructor.prototype.constructor
); // true

console.log(
	Object
		.getOwnPropertyDescriptor(
			TheConstructor.prototype, 
				'constructor'
	));
	
debugger;
