// const interleave = (...strings) =>
// 	strings
// 		.map(s => s.split(''))
// 		.reduce((a, s, o) => 
// 			s.reduce((a, c, i) => 
// 				(a[o + (strings.length * ++i)] = c) && a, a)
// 		, [])
// 		.join('');
/*
	s = string
	a = array/accum
	o = offset
	---
	a = array/accum
	c = character
	i = index
*/

const f = (a, s) =>
	!a.length ? s : f(a.map(s => s.slice(1)).filter(s => s.length), s.concat(a.map(s => s[0])));
const interleave = (...strings) => f(strings, []).join('');
