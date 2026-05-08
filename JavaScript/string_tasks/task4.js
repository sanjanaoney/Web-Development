let str = "xoxoxoxoxyoyoyoyoxoxoyoxoxoyo";
let result = '';

for (let char of str) {
  if (char === 'x') {
    result += 'y';
  } else if (char === 'X') {
    result += 'Y';
  } else {
    result += char;
  }
}

console.log(result);
