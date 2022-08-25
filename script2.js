// let age = 1;

// if (age > 18){
//     console.log('Adult');
// }
// else if (age > 7){
//     console.log('Child');
// }
// else if( age > 3){
//     console.log('Toddler');
// }
// else{
//     console.log('Baby');
// }
// //////////////////////////////////////
// const shotTempCost = 50; //1-3 days
// const weekCost = 40; //4-7 days
// const longTermCost = 30; // more than 8 days

// console.log(
//     getRentalPrice(2), // 2 * 5 = 100
//     getRentalPrice(5), // 3 * 50 + 2 * 40 = 230
//     getRentalPrice(10) // 3 * 50 + 4 * 40 + 3 * 30 = 400
// );
// function getRentalPrice(numberOfDays){
//     if (numberOfDays <=3){
//         return numberOfDays * 50;
//     }
//     let daysLeft = numberOfDays - 3;
//     if (daysLeft <= 7){
//         return 3 * 50 + daysLeft * 40;
//     }
//     daysLeft = numberOfDays - 7;
//     return 3 * 50 + 4 * 40 + daysLeft * 30;
// }

let age = 8;
let message;
if(age >= 18){
    message = 'Adult';
}
else {
    message = 'Child';
}
console.log(message);
// the same with conditonal operator
let age1 = 18;
let message1 = (age1 >= 18) ? 'Adult' : 'Child';
console.log(message1);