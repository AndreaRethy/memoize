// Create a memoize funtion that takes in any function as an argument
const memoize = (fn: Function) => {
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

//Example function to test memoize
function calculateDouble(n: number): number {
  return 2 * n;
}

export { calculateDouble, memoize };