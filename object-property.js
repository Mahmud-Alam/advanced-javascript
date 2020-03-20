const student = [
    {id:21, name:"Omar Sunny"},
    {id:31, name: "Maannaaaa"},
    {id:41, name:"Moyouri"},
    {id:71, name: "DeepJol"}
];
/*const studnet1 = [];

for(let i=0;i<student.length;i++){
    const name = student[i].name;
    studnet1[i] = name;
}
console.log(studnet1);
*/

const names = student.map(s=>s.name);
console.log(names);

const ids = student.map(i=>i.id);
console.log(ids);


//filter__________:
const bigger = student.filter(i=>i.id>40);
console.log(bigger);

//find_____________:
const bigger1 = student.find(i=>i.id>40);
console.log(bigger1);