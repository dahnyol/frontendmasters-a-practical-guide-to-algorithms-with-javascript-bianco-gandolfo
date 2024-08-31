// Task: rewrite this function so that it uses loop rather than recursion
function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]
        if (index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    return recurse(0, '') 
}

// loop version of joinElements
function joinElementsIteratively(array, joinString) {
    let resultSoFar = '';
    // loop until the second to last element in the array, 0 < array.length - 1
    for (let i = 0; i < array.length - 1; i++) {
        resultSoFar += array[i] + joinString;
    }
    // return resultSoFar + the last element in the array
    return resultSoFar + array[array.length - 1];
} 

console.log('~~~TASK~~~');
console.log(joinElementsIteratively(['s', 'cr', 't cod', ' :) :)'], 'e')) 


// Task 1: Without peeking, write your own recursive factorial method
// loop version of factorial 
function factorialLoop(num) {
    let result = 1;
    
    for (let i = 1; i <= num; i++) {
        console.log(`${result} * ${i} = ${result * i}`)
        result *= i;
    }
    return result;
}
// recursive factorial
const factorialRecurively = (
    (x) => {
        if (x === 0) {  // base case
            return 1
        } else {
            
            return x * factorialRecurively(x - 1);
        }
    }
);


console.log('~~~TASK 1~~~');
console.log(factorialLoop(5), 'factorialLoop test')
console.log(factorialRecurively(5), 'factorialRecursively test')  

// Task 2: Use your memo function from the previous exercise to memoize your factorial method
// we pass in our factorial recursion method defined in task 1
const memoize = (cb) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('fetching from cache:', n)
            return cache[n];
        } else {
            console.log('calculating result', n)
            cache[n] = cb(n);
            return cache[n];
        }
    }
}
// pass in recursive factorial method into generic memoize function which expects a callback/fn.
const factorial = memoize(
    (x) => {
        if (x === 0) {  // base case
            return 1
        } else {
            
            return x * factorial(x - 1);
        }
    }
);

console.log('~~~TASK 2~~~');
console.log(factorial(5), 'memoize factorial 5')
console.log(factorial(6), 'memoize factorial 6')