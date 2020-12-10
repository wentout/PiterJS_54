
debugger;

// test method is included
// via prototype chain
// of Extended .prototype
// which is on the bottom level
// of this keyword for all
// of the constructors ↑ ↓
class Base {
	constructor() {
		this.test();
	}
}

class Extended extends Base {
	test () {
		console.log("test");
	}
}

new Extended();

debugger;