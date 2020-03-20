//0 bade onno value hole true hbe, bt 0 hole false hbe
const age = 4;

if(age){
    //console.log("condition is true");
}
else{
   // console.log("condition is false");
}

// khali string dile false dekhbe, kisu thakle true hbe
const name = " ";

if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//falsy value___________
//1st:number=0 hole false || string="" empty string o false
//2nd: declare na korle undefined hbe tailew false hbe
//3rd: null holew false hbe
//4th: name = NaN; taw false hbe
//5th: name = false; ata flase dea bool tai flase hbe;

//truthy value__________
//1st: "0" hole string hbe so true;
//2nd: " " gap holew string vabbe so true;
//3rd: name = []; array dec korlew true;
//4th: name ={}; object creat krlew true; 
//5th: name="false"; ata akta string, sta bool nam so ata true hbe; 