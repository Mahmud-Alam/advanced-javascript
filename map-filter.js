//array loop korte map use hoe, map akta array e retrn kore
//map 3ta parameter retrn kore,
//1 element, 2 index, full array;

const numbers =[3,4,5,6,7,8];
/*const output = [];

for(let i=0;i<numbers.length;i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
*/
//atake aro valo kore kroa jae, take map bole
//1st:
/*function square(element){
    return element*element;
}

arrow function diye likhle___________:

const square = element => element*element;
or
const square = x => x*x;

numbers.map(square);
*/

//2nd: map e 3ta parameter pete pari;

/*numbers.map(function(element, index, array){
    console.log(element, index, array);
})
*/

/*const result = numbers.map(function(element){
    return element*element;
})
*/

//arrow func diye_______________________:
const result = numbers.map(x=>x*x)

console.log(result);


