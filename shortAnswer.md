# Part 3 - short answer
## Answer the following questions

### True or false: n^2 + n is O(n^2).
    TRUE
### True or false: n^2 * n is O(n^3).
    TRUE
### True or false: n^2 + n is O(n).
    FALSE
### What’s the time complexity of the .indexOf array method?
    O(n)
### What’s the time complexity of the .includes array method?
    O(n)
### What’s the time complexity of the .forEach array method?
    O(n)
### What’s the time complexity of the .sort array method?
    O(n log(n))
### What’s the time complexity of the .unshift array method?
    O(n)
### What’s the time complexity of the .push array method?
    O(1)
### What’s the time complexity of the .splice array method?
    O(1) or O(n)
    If you are adding or removing a single element, then the time complexity of the .splice() method is O(n)
    if you are adding or removing multiple elements, then the time complexity of the .splice() method may be O(n), where n is the length of the array, plus the number of elements being added or removed. This is because the method needs to shift elements over to make room for the added elements or close the gap left by the removed elements.

    In the case of removing elements, it's important to note that the time complexity of the method depends on where the removed elements are located in the array. If the removed elements are at the beginning or end of the array, then the time complexity may be closer to O(1), as there are no elements to shift. But if the removed elements are in the middle of the array, then the time complexity will be closer to O(n), as many elements may need to be shifted over to close the gap left by the removed elements.

    Therefore, the time complexity of the .splice() method is not a fixed value but can vary depending on the specific use case.
### What’s the time complexity of the .pop array method?
    O(1)
### What’s the time complexity of the Object.keys() function?
    O(n)

### What’s the space complexity of the Object.keys() function?
    The space complexity of the Object.keys() function is O(n), where n is the number of properties in the object.

    This is because the function creates a new array to store the keys of the object, and the size of this array is proportional to the number of properties in the object. Therefore, as the number of properties in the object grows, the size of the array created by the Object.keys() function will also grow, leading to an increase in the space used by the function.

    It's important to note that this space complexity only accounts for the additional space used by the Object.keys() function and not the space used by the original object