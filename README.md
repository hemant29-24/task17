# task17
## Features
- Takes two numbers as input.
- Performs division of the first number by the second number.
- Uses a JavaScript Promise.
- Uses an arrow function.
- Rejects the Promise when the second number is zero.
- Resolves the Promise with the division result.
- Handles errors using catch().
- Contains five test cases.
- Uses HTML, CSS and JavaScript.

## How It Works
The divide function accepts two numbers.
If the second number is zero, the Promise is rejected with an error message.
Otherwise, the Promise is resolved with the result of the division.
The resolved Promise is handled using then() and rejected Promise is handled using catch().

## Test Cases
1. 10 / 2 = 5
2. 20 / 4 = 5
3. 15 / 3 = 5
4. 7 / 2 = 3.5
5. 10 / 0 = Division by zero is not allowed.
