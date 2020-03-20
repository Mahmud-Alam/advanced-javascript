//Hoisting____
// var use korle hoisting kore, bt let, const hointing kore na
//var use korle progrm er jno jaega theke seta call kra jabe, scope full hbe
//let, const use korle scope only {} er moddhe thakbe, baire pawa jabe na

//kisu declear korsi, seta uporer dike niye jawa tai hocche hoisting 
//var likhle je scope e declear kora hbe seta parent scope niye nibe, value ta tokhn jkno scop theke accessble hbe
//let, const e seta hbe na, oi scope ei thakbe

// just declation part ta upore nibe, value ta upore nibe na,
// ex: 
//console.log(day);
//var day = "friday";
// undefined hbe cz, value uproe jae nai, tai console e print korte prbe na, cz day er value niche;

//same tai jodi let diye kora hoto tahole undefined na hoe error hoye jeto;

//let, const scope variable bole.......





/* scope 1st(function scope):_____________
function sum(first, second){
    let result= first + second;
    console.log(result);

    return result;
}

const output = sum(3,7);
console.log(result); //result sunftion er vitore, tai ata abire theke call hbe na, function scope
console.log(output);
*/

/* scope 2nd(global scope):________

let bonus = 20; //global scope

function sum(first, second){
    let result= first + second + bonus;
    console.log(bonus);   // global scope
    console.log(result);

    return result;
}

const output = sum(3,7);
console.log(bonus);   // global scope
console.log(output);
*/



let bonus = 20; //global scope

function sum(first, second){
    let result= first + second + bonus;
    //console.log(bonus);
    if(result>9){
        const mood = "happy";
        console.log(mood)
    }
    return result;
}

const output = sum(3,7);
//console.log(bonus); 
//console.log(output);
