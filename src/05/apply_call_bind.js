function foo() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(args.reduce((old, currt) => old + currt));
}
foo(1, 2, 3); // 6
foo.call(null, 1, 2, 3); // 6
foo.apply(null, [1, 2, 3, 4]); // 6
f = foo.bind(null, 1, 2, 3);
console.log(f(1, 2, 3));
