function keyAdder() {
	return Object.keys(this).reduce((a, b) => 
		(typeof this[b] === 'number') ? (a + this[b]) : a, 0);
}