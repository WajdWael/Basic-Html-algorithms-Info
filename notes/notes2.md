### By design paradigm:


# Search algorithm:
Search algorithms work to retrieve information stored within some data structure, or calculated in the search space of a problem domain, with either discrete or continuous values.

> Also it can be classified based on their mechanism of searching into three types of algorithms: linear, binary, and hashing.

# Linear search:
In computer science, **a linear search aka sequential search is a method for finding an element within a list**. It sequentially checks each element of the list until a match is found or the whole list has been searched. In long story short: 

> A linear search sequentially checks each element of the list until it finds an element that matches the target value. If the algorithm reaches the end of the list, the search terminates unsuccessfully.

--

# Binary search 
In computer science, **binary search, aka half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array, Binary search is faster than linear search except for small arrays.** However, the array must be sorted first to be able to apply binary search. However, binary search can be used to solve a wider range of problems, such as finding the next-smallest or next-largest element in the array relative to the target even if it is absent from the array.

> Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.

--

# Hash table

This forms the basics of what a hash function is. The hash function, however, **takes it a step further, So essentially all hashing does is it uses a function to map data to a representative numeric or alphanumeric value**. For the hash function, regardless of the size of the input, the output will always remain the same.

Hash tables utilize hashing to form a data structure, All that means is that, in a hash table, **keys are mapped to unique values.**

> Hash tables are extremely fast, having a time complexity that is in the order of O(1).

--

# Merge algorithms
Are a family of algorithms **that take multiple sorted lists as input and produce a single list as output**, containing all the elements of the inputs lists in sorted order. 

> These algorithms are used as subroutines in various sorting algorithms, most famously merge sort.

Merge sort conceptually, a merge sort **works as follows**:

1. Divide the unsorted list into n sublists, 
2. each containing one element (a list of one element is considered sorted).
3. Merge sublists "Repeatedly" to produce new sorted sublists
    - Until there is **only one sublist** remaining. 
4. This will be the sorted list.

---
--
**Reference**:
BOOK 
https://apps2.mdp.ac.id/perpustakaan/ebook/Karya%20Umum/Dsa.pdf