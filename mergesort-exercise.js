// TASK: Implement mergesort!

// Split array into halves and merge them recursively
// mergeSort(list) psuedocode
    // base case: if list.length < 2, return
    // break the list into halves L & R
    // Lsorted = mergeSort(L)
    // Rsorted = mergeSort(R)
    // return merge(Lsorted, Rsorted)
function mergeSort(arr) {
    // base case
    if (arr.length === 1) {
        // return once we hit an array with a single item --which is sorted
        return arr
    }

    const middle = Math.floor(arr.length - 1 / 2) // get middle item of the array round down (e.g. 5/2 -> 2)
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
    // recursively merge left and right
    return merge(sortedLeft, sortedRight)
}

// compare the arrays item by item and return the concatenated result
// initialize empty array
// compare the first index of the left array to the first index of the right array
// push the lower value to the empty array
// shift the array with the lower value
// repeat until both L and R arrays are empty
function merge(leftArr, rightArr) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < leftArr.length && indexRight < rightArr.length) {
        if (leftArr[indexLeft] < rightArr[indexRight]) {
            result.push(leftArr[indexLeft])
            indexLeft++
        } else {
            result.push(rightArr[indexRight])
            indexRight++
        }
    }

    return result.concat(leftArr.slice(indexLeft)).concat(rightArr.slice(indexRight))
}

const list = [2,5,1,3,7,2,3,8,6,3]

console.log(mergeSort([5,1,4,2,8]))
console.log(mergeSort(list))