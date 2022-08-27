// let myAge = 0;
// myAge += 1; // myAge = myAge + 1;
// console.log('Happy birthday!');

// // the same but repeatable

// for (let age = 0; age <= 5; age += 1){ //1)age = 0 2)age<=5 ? YES-> 3) {...} 4) age =+ 1 
//     console.log('Happy birthday!');
// }

// debugger; // tool to look how program works step by step
// for (let i = 0; i < 3; i++){
//     console.log(i);
//     console.log('OK!');
// }
// console.log('-----Done----');

//sum 3...15 (3+4+5+..+15)
// sum = 0;
// for (i = 3; i <=15; i ++){
//     sum = sum + i; //3 + 4 + 5 + ...
// }
// console.log(sum);
// // sum 1, 3, 5, 7
// sum1 = 0;
// for (i = 1; i <= 7; i += 2){
//     console.log(i);
//     sum1 += i;
// }
// console.log(sum1);

// // скрипт повинен виводити у консоль числа від 1 до N включно, але з кроком step.
// function printNumbersWithStep(N, step) {
//     for (let i = 1; i <= N ; i += step) {
//       console.log(i);
//     }
//   };
//   console.log(
//     printNumbersWithStep(7, 3)
//   );
// function getDrinks(numberOfGuests){
//     if (numberOfGuests === 0){
//         return 0;
//     }
//     let numberOfPortions = 0;
//     for (let i = 1; i <= numberOfGuests; i++){
//         numberOfPortions += i ;
//     }
//     return numberOfPortions;
// }
// getDrinks(1);

// function getDrinksWithStep(numberOfGuests, step){
//     if (numberOfGuests === 0){
//         return 0;
//     }
//     let numberOfPortions = 0;
//     for (let i = 1; i <= numberOfGuests; i = i+step){
//         numberOfPortions += i ;
//     }
//     return numberOfPortions;
// }
// getDrinksWithStep(10,3);

function calculateProfit (amount, percent, period){
    let total = amount;
    for(let i = 0; i < period; i++){
        total +=  total * percent / 100;
    }
    return parseInt (total - amount);
}
console.log(
    calculateProfit(12500, 3, 12));