const validMap = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let obj = {};

  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    let key = obj[element];
    if (key) {
      return console.log(false);
    } else {
      obj[element] = s2[i];
    }
  }
  return console.log(true);
};
validMap('abc', 'bcd')
// validMap('bar', 'foo');
// validMap('foo', 'bar');
