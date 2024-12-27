function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Invalid input: parameters must be numbers";
  }
}

let result1 = addSafe(1, "2"); //Correctly handles the type mismatch.
console.log(result1); // Outputs 'Invalid input: parameters must be numbers'

let result2 = addSafe(1, 2); // Works as expected
console.log(result2); //Outputs 3