// The given function logUpTo(n) uses a for loop to print numbers from 1 up to n.

// The time complexity of this function is O(n), since the loop iterates n times. As n grows, the number of iterations and time taken by the function will increase linearly.

// Therefore, the time complexity of logUpTo(n) is O(n).
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// The given function logAtLeast10(n) uses a for loop to print numbers from 1 up to the maximum value between n and 10.

// The time complexity of this function is O(max(n, 10)), since the loop will iterate for the maximum of n and 10. As n grows, the number of iterations and time taken by the function will increase linearly until n exceeds 10, after which the loop will continue to iterate a constant number of times.

// However, in Big O notation, we drop the constant factor, which means that the time complexity of logAtLeast10(n) can be simplified to O(n).

// Therefore, the time complexity of logAtLeast10(n) is O(n).
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// The given function logAtMost10(n) uses a for loop to print numbers from 1 up to the minimum value between n and 10.

// The time complexity of this function is O(min(n, 10)), since the loop will iterate for the minimum of n and 10. As n grows, the number of iterations and time taken by the function will increase linearly until n exceeds 10, after which the loop will iterate a constant number of times.

// However, in Big O notation, we drop the constant factor, which means that the time complexity of logAtMost10(n) can be simplified to O(1).

// Therefore, the time complexity of logAtMost10(n) is O(1).
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// The given function onlyElementsAtEvenIndex(array) takes an array as input and returns a new array containing only the elements at even indexes of the input array.

// The time complexity of this function is O(n), where n is the length of the input array. The loop iterates over each element in the input array and adds the element to the new array only if the index is even. Since the loop iterates once for each element in the array, the time complexity of the function is proportional to the length of the input array.

// Therefore, the time complexity of onlyElementsAtEvenIndex(array) is O(n).
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// The given function subtotals(array) takes an array of numbers as input and returns a new array containing the running subtotals of the input array.

// The time complexity of this function is O(n^2), where n is the length of the input array. This is because the function uses two nested loops to calculate the subtotals for each element in the input array.

// The outer loop iterates over each element in the input array, and the inner loop iterates over the elements up to and including the current element of the outer loop. Therefore, the number of iterations for the inner loop increases by 1 for each iteration of the outer loop, resulting in a total of n(n+1)/2 iterations over both loops.

// Since the time complexity is dominated by the nested loops, we can simplify O(n(n+1)/2) to O(n^2).

// Therefore, the time complexity of subtotals(array) is O(n^2).
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
        let subtotal = 0;
        for (let j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}


// The given function vowelCount(str) takes a string as input and returns an object containing the count of each vowel in the input string.

// The time complexity of this function is O(n), where n is the length of the input string. This is because the function uses a single loop to iterate over each character in the input string and check if it is a vowel.

// The time complexity of the includes method is O(m), where m is the length of the string being searched for. In this case, m is a constant value of 10 (the length of the string aeiouAEIOU), so we can treat the includes method as O(1).

// Therefore, the overall time complexity of the function is determined by the loop, which iterates once for each character in the input string. As the size of the input string (n) increases, the time taken by the function will increase linearly.

// Therefore, the time complexity of vowelCount(str) is O(n).
function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            if (char in vowelCount) {
                vowelCount[char] += 1;
            } else {
                vowelCount[char] = 1;
            }
        }
    }

    return vowelCount;
}


