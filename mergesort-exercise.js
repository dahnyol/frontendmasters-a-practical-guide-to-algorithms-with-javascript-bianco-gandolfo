// TASK: Implement mergesort!
// mergeSort(list) psuedocode
//     base case: if list.length < 2, return
//     break the list into halves L & R
//     Lsorted = mergeSort(L)
//     Rsorted = mergeSort(R)
//     return merge(Lsorted, Rsorted)
// initialize n to the length of the list
// base case is if n < 2, just return
// initialize mid to n/2
// left = left slice of array to mid - 1
// right = right slice of array to mid to n - 1
// mergeSort(left)
// mergeSort(right)
// merge(left, right, a)
function mergeSortExercise(list) {
    if (list.length < 2) {
        return list
    } else {
        let mid = Math.floor(list.length / 2)

        console.log(mid, 'test')
        return list
    }
}
// console.log(mergeSortExercise([5,1,4,2,8]))