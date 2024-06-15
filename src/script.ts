let cachedValue: number | null;
let result: number | null;
let count: number = 0;

function calculateDouble(n: number): number | null {
  if (cachedValue === n) {
    console.log(`Returning cached result for ${n}: ${result}`);
    return result;
  } else {
    console.log('No cached result yet. Calculating new result');
    calculate(n);
    return result;
  }
}

function calculate(n: number): void {
  console.log(`Calculate called with ${n}`);
  count ++;
  result = 2 * n;
  cachedValue = n;
  console.log(`Result is ${result}`);
}

function currentCount(): number {
  return count;
}

export { calculateDouble, calculate, currentCount };