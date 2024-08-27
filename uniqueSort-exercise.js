/*
    Suppose we want to check whether elements in an array are unique or not, 
    or if not have repeated elements in the same array
*/

// we can do like this 
const isUnique = (arr) => {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~ OUTER LOOP ~~~ i === ${i}`);
        for (let j = 0; j < arr.length; j++) {
            console.log(`~~~ OUTER LOOP ~~~ i === ${i}`);
            // check if we have same elements in different positions
            if (i !== j && arr[i] === arr[j]) {
                // if yes the result will be false
                result = false;
            }
        }
    }
    return result;
};

// The above result is correct but the time complexity is O(n^2), so how can we improve? 

const isUniqueMemoize = (arr) => {
    // we are create a object that will hold all the uniques values
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        // check if the current value exist in the unique object or not
        if (breadcrumbs[arr[i]]) {
            // if yes return false the array is not unique
            result = false;
            break;
        } else {
            // if not add to the unique object
            breadcrumbs[arr[i]] = true;
        }
    return result;
    }
};
// Complexity of `isUniqueMemoize` function above is O(n)



// Task: Transform this simple sorting algorithm into a unique sort. It should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

// const uniqSort = function(arr) {
    // const breadcrumbs = {};

    // return arr.sort((a, b) => a - b)
// };

const uniqSort = function(arr) {
    const breadcrumbs = {};
    let result = [];
  
    for(let i = 0; i < arr.length; i++) {
      if (!breadcrumbs[arr[i]]) {
        result.push(arr[i]);
        breadcrumbs[arr[i]] = true; // result: [4: true, 2:true, ...]
      }
    }
    return result.sort((a,b) => a - b);
}

  
// uniqSort([4,2,2,3,2,2,2,4]); // => [2,3,4]
// uniqSort([1,5,2,1]); // => [1,2,5]
  
module.exports = uniqSort