/* Arguments || Array like object*/

//2ta parameter dise bt pass korse 3ta tahole? 
//sum kivbe asbe sob gular jto gula pss krse?

/*function add(num1, num2){
    console.log(arguments);  // kotogula arguments pass korse user seta ber korte ata sue kroa heo bt ata kono array na, {} objct er mto;
    return num1 + num2 + arguments[2];
}
const result = add(2,3,5); 
console.log( result)

akhn 2ta parameter thaklew 3ta pass korlew kaj korbe
*/

//but 4,5,6ta pass korle to r kaj korbe na?

/*
function add(num1, num2){
    console.log([...arguments]); //arguments array na bt ... diye array banaia nea hoise
    return num1 + num2 + arguments[2];
}
const result = add(2,3,5,7,3); 
console.log( result);
*/

function add(num1, num2){
    let sum=0;
    for(let i=0;i<[...arguments].length;i++){
        sum = sum+arguments[i];
    }
    return sum;
}
const result = add(2,2,2,9,5,6,4); 
console.log( result);

