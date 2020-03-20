//slice:___________
//slice korlew actual array change hoe na
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5); // start koi & end koi
console.log(part);
console.log(nums);


//Splice:_________
//const removed = nums.splice(2,3); 
//splice korle actual array change hoe jae
// start koi & total kto gula remov krbo
//splice ber kore niye kisu bosaite caile bosanow jabe;
// mane replace kora jabe

const removed = nums.splice(2,3,77,78,79);
// console.log(removed);
// console.log(nums);

//join_______
//join korle array er sob number mile akta string hoe jae

const together = nums.join("");
console.log(together)


