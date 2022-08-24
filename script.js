// the function can be called before its initialization
printRectangleInfo(8, 11);

function printRectangleInfo(a, b){
    const perimetr = 2 * a + 2 * b;
    const square = a * b;
    console.log(`Perimetr = 2 * ${a} + 2 * ${b} = ${perimetr}`);
    console.log(`Square = ${a} * ${b} = ${square}`);
    console.log('_______________________________');
};
printRectangleInfo(2, 34);


function buildHouse(houseColor, numberOffloors){
    const house = `${houseColor} ${numberOffloors} - floores house`;
    return house;
}
// 'return' завершує виконання функції, і наступні команди НЕ виконуються. 
// Тобто для функції слово 'return' означає, що це кінець функції і зараз вона 
// виконає останню свою дію.

let _8floorHouse = buildHouse('white', 8);
console.log(_8floorHouse)
smallHouse = buildHouse('blue' ,3);
console.log(smallHouse)
tallHouse = buildHouse('white', 32);
console.log(tallHouse)

function checkIfTheNumberIsEven(a){
    let rest = a % 2;
    if(rest === 0 ){
        console.log(`${a} is the even number`);
    }
    else{
        console.log(`${a} is the odd number`);
    }
}
checkIfTheNumberIsEven(20);

//OR 

function isEven(x){ // function declaration
    return(x%2) === 0; // return true oe false
};
console.log(isEven(3));

//OR the same, but function expression
// this function can be used only after declaration
const isEven2 = function(x){
    return(x%2) === 0; // return true oe false
}
console.log(isEven2(12));
