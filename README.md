# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**Best Case:** The best case time complexity for the implemented code is $\Theta(n)$. This occurs when the array is already sorted, and the isSorted function immediately detects this on the first check.

**Worst Case:** The worst-case time complexity of the code is $\Theta(n * n!)$. This happens when all possible permutations need to be checked. The getPermutations function generates all n! permutations of the array, and for each permutation, the isSorted function is called, which takes $\Theta(n)$ time. Thus, the overall time complexity is the product of these two factors: $\Theta(n * n!)$.

**Random Permutations without Memory:** If the permutations are generated randomly without memory, there is a chance that the sorted permutation will never be reached. In this case, the time complexity can be considered $\Theta(\infty)$, as there is no guarantee that the algorithm will ever find the sorted permutation.


References:

brute-force-sorting-vijaykodru Used my own repository for reference only. Everything was implemented before I looked at it. I implemented a more straight forward way of doing the count for number of permutations tried rather than doing it in the generate permutations

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice