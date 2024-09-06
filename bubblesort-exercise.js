// TASK: Implement bubblesort!
// Bubble Sort: compares adjacent indices and kind of bubbles up the larger number.

function bubbleSortExercise(array) {
    let counterInner = 0
    let counterOuter = 0
    let countSwap = 0
    //outerloop, first num selected to compare to each in the inner loop
    for (let i = 0; i < array.length; i++) {
        counterOuter++
        for(let k = 1; k < array.length; k++) {
            counterInner++
            if (array[i] < array[k]) {
                countSwap++
                let temp = array[i]
                array[i] = array[k]
                array[k] = temp
            }
        }
    }
    console.log('outer:', counterOuter, 'inner:', counterInner, 'swaps:', countSwap)
    return array;
}
console.log(bubbleSortExercise([5,1,4,2,8])) // [1,2,4,5,8]
console.log(`----first-try----`)
console.log(`first-try: arrayRandom`)
console.log(bubbleSortExercise([9,2,5,6,4,3,7,10,1,8]))
console.log(`first-try: arrayOrdered`)
console.log(bubbleSortExercise([1,2,3,4,5,6,7,8,9,10]))
console.log(`first-try: arrayReversed`)
console.log(bubbleSortExercise([10,9,8,7,6,5,4,3,2,1]))

// instructor solution

// counters added to solutions to display how many times operations certain are executed
// sample of arrays to sort
const arrayRandom = [9,2,5,6,4,3,7,10,1,8];
const arrayOrdered = [1,2,3,4,5,6,7,8,9,10];
const arrayReversed = [10,9,8,7,6,5,4,3,2,1];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
// basic implementation 
// missing optimizations: if no swaps occur, then your array is already sorted and you can break/return from the loop.
function bubbleSortBasic(array) {
    let counterOuter = 0;
    let counterInner = 0;
    let countSwap = 0;

    for (let i = 0; i < array.length; i++) {
        counterOuter++;
        for(let j = 1; j < array.length; j++) {
            counterInner++;
            if (array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }
    console.log('outer:', counterOuter, 'inner:', counterInner, 'swaps:', countSwap)
    return array
}
console.log(`----basic----`)
console.log(`basic: arrayRandom`)
console.log(bubbleSortBasic(arrayRandom.slice()))
console.log(`basic: arrayOrdered`)
console.log(bubbleSortBasic(arrayOrdered.slice()))
console.log(`basic: arrayReversed`)
console.log(bubbleSortBasic(arrayReversed.slice()))

// optimized
function bubbleSort(array) {
    let counterOuter = 0;
    let counterInner = 0;
    let countSwap = 0;

    let swapped;
    do {
        counterOuter++
        // if no swaps occur, it is sorted, so just return it
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            counterInner++
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                countSwap++;
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);

    console.log('outer:', counterOuter, 'inner:', counterInner, 'swaps:', countSwap)
    return array;
}
console.log(`----optimized----`)
console.log(`optimized: arrayRandom`)
console.log(bubbleSort([9,2,5,6,4,3,7,10,1,8]))
console.log(`optimized: arrayOrdered`)
console.log(bubbleSort([1,2,3,4,5,6,7,8,9,10]))
console.log(`optimized: arrayReversed`)
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))

// bubblesort time complexity scenarios
// reverse list is worse case, due to having to change/compare every single element
// array ordered is best case, as it does not have to compare every element (or any)