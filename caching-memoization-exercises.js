// Memoization: caching the result of a function. *remembering things*
// it is a type of caching, the value we are caching is going to be returned from a function.
// (other types of caching: cache HTTP requests, cache in browser, cache in JavaScript environment) 
// (caching in its simplest form is saving to an object/array).

// !5 -> 5 * 4 * 3 * 2 * 1
const factorial = (n) => {
    // calculations: n * (n - 1) * (n - 2) ... (2) * (1)
    return factorial;
}

factorial(35); // factorial(35) result is cached
factorial(36); // factorial(36) = factorial(35) * 36; 


// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10.
// a simple multiplication fn
const times10 = (n) => n * 10;

console.log('~~~TASK 1~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip: Create a function that checks if the value for has been calculated before.
// protip: If the value for n has not been calculated, calculate and then save the result in the cache object.
const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log('fetching from cache:', n)
        return cache[n];
    } else {
        console.log('calculating result')
        cache[n] = times10(n);
        return cache[n];
    }
}

console.log('~~~TASK 2~~~');
console.log('Task 2 calculated value:', memoTimes10(9)); // calculates 90
console.log('Task 2 cache value:', memoTimes10(9)); // cache = { 9: 90 } // cache returns 90 


// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

// const times10 = n => n * 10
const memoizedClosureTimes10 = () => {
    let cache = {};

    return (n) => {
        if (n in cache) {
            console.log('fetching from cache:', n)
            return cache[n];
        } else {
            console.log('calculating result')
            cache[n] = times10(n);
            return cache[n];
        }
    }
}
// a closure is a function returning a function - this allows us to call it later and retain local version/memory of our cache.
// variable memoizedTimes10 stores the return from the function of the body of memoizedClosureTimes10
let memoizedTimes10 = memoizedClosureTimes10()

console.log('~~~TASK 3~~~');
console.log('Task 3 calculated value:', memoizedTimes10(9)); // calculates 90
console.log('Task 3 cache value:', memoizedTimes10(9)); // cache = { 9: 90 } // cache returns 90 


// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pull it in from the global scope.
// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

// const times 10 = n => n * 10;
const memoize = (cb) => {
    let cache = {};
    // return (...args) => {
    return (n) => {
        if (n in cache) {
            console.log('fetching from cache:', n)
            return cache[n];
        } else {
            console.log('calculating result')
            // cache[n] = cb(...args);
            cache[n] = cb(n);
            return cache[n];
        }
    }
}

// const times9 = n => n * 9; -> const memoizeTimes9 = memoize(times9)
// we pass in callback function times10 -> memoize(times10).
// memoize cache is initialized as empty and it returns the body of the function definition inside memoize, we save/store this to the variable memoizeTimes10. (function is not invoked)
const memoizeTimes10 = memoize(times10);
console.log(`~~~TASK 4~~~`)
try {
    // we invoke/call the function memoizeTimes10 and pass in an argument 9 -> memoizeTimes10(9)
    console.log('Task 4 calculated value:', memoizeTimes10(9)); // calculates 90
    console.log('Task 4 cache value:', memoizeTimes10(9)); // cache = { 9: 90 } // cache returns 90 
} catch {
    console.error('Task 4:', e)
}