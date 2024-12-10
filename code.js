function permutationSort(a) {
    let count = 0;  // Counter to track number of permutations tried

    // Checks if the array is sorted
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    // To generate permutations recursively
    function getPermutations(arr, current) {
        if (current === arr.length) {
            count++;  // Increment the counter for each permutation
            if (isSorted(arr)) {
                return true;  // Return true if the permutation is sorted
            }
            return false;
        }

        for (let i = current; i < arr.length; i++) {
            swap(arr, i, current);  // Swap elements to generate permutations
            if (getPermutations(arr, current + 1)) {
                return true;  // If a sorted permutation is found, stop further exploration
            }
            swap(arr, current, i);  // Backtrack by swapping elements back
        }

        return false;  // If no sorted permutation is found
    }

    // Swap two elements in the array
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    
    getPermutations(a, 0);
    
    return count;
}
