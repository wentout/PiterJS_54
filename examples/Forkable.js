
debugger;

const Base = function () { };

class User extends Base { }

Reflect.setPrototypeOf(Base.prototype, new Proxy(User.prototype, {
	get (target, propName, receiver) {
		return Reflect.get(target, propName, receiver) || undefined;
	}
}));

const user = new User();
debugger;

// --- construct ---

const Forkable = function () { };
Object.defineProperty(Forkable.prototype, 'fork', {
	get () {
		const me = this;
		return function (...args) {
			debugger;
			// this keyword points to instance itself
			if (new.target) {
				return new me.constructor(...args);
			}
			return me.constructor.call(this, ...args);
		};
	}
});

const instance = new Forkable();
const forked = new instance.fork();
console.log(instance === forked);			// false
console.log(instance instanceof Forkable);	// true
console.log(forked instanceof Forkable);	// true

debugger;