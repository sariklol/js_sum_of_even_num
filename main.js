let num = +prompt('Write a number to get the sum of the even numbers.')
let sum = 0

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}

alert('Open the console to see the result.')

console.log('The sum of all the even numbers is: ' + sum);