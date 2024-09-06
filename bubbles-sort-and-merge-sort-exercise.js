// TASK: Implement bubblesort!
// Bubble Sort: compares adjacent indices and kind of bubbles up the larger number.
// Consider an array [5,1,4,2,8]
// 
// start at index 1 (element is 5) begin comparsion with adjacent indices
// [5,1,4,2,8] - 5 > 1 ? -> yes, swap 
// [1,5,4,2,8] - 5 > 4 ? -> yes, swap 
// [1,4,5,2,8] - 5 > 2 ? -> yes, swap
// [1,4,2,5,8] - 5 ? 8 ? -> no, stay
// start at index 2 (element is 4)
// [1,4,2,5,8] - 4 > 2 ? -> yes swap
// [1,2,4,5,8] - 4 > 5 ? -> no, stay
// start at index 3 (element is 4) 
// [1,2,4,5,8] - 4 > 5 ? -> no stay
// array is sorted. (best case O(n), worst case O(n^2))
function bubbleSortExercise(array) {
    
    //outerloop, first num selected to compare to each in the inner loop
    for (let i = 0; i < array.length; i++) {
        for(let k = 0; k < array.length; k++) {
            if (array[i] < array[k]) {
                let temp = array[i]
                array[i] = array[k]
                array[k] = temp
            }
        }
    }
    return array
}
console.log(bubbleSortExercise([5,1,4,2,8])) // [1,2,4,5,8]


// TASK: Implement mergesort!
// mergeSort(list) psuedocode
//     base case: if list.length < 2, return
//     break the list into halves L & R
//     Lsorted = mergeSort(L)
//     Rsorted = mergeSort(R)
//     return merge(Lsorted, Rsorted)
