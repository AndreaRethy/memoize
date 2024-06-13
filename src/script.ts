let cachedValue: number | null = null;
let result: number | null = null;

function calculateDouble(n: number): number | null {
  console.log(`calculateDouble called with ${n}`);
      if (cachedValue === n) {
        console.log('Returning cached result');
        return result;
      } else {
        console.log('Calculating new result');
        calculate(n);
        return result;
      }
}

function calculate(n: number): void {
  console.log(`calculate called with ${n}`);
        result = 2 * n;
        cachedValue = n;
        console.log(result);
        console.log(`Result is ${result}`);
}

export { calculateDouble, calculate };