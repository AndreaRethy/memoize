// Create a memoize funtion that takes in any function as an argument
function memoize(fn: Function) {
  const cache: {[key: string]: any} = {};

  return (...args: any[]) => {
    let key: string = args.toString()
    if (key in cache) {
      console.log(cache);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}

let count = 0;

//Example function to test memoize
function calculateDouble(n: number): number {
  count ++;
  return 2 * n;
}

// Create a function for testing purposes
function currentCount(): number {
  return count;
}

export { calculateDouble, memoize, currentCount };