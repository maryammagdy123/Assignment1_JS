var createCounter = function (init) {
	let current = init;

	return {
		increment: () => ++current,
		decrement: () => --current,
		reset: () => (current = init)
	};
};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset());
console.log(counter.decrement());


// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0


