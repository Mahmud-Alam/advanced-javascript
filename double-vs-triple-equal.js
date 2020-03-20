/* == just value check korbe
   === value and type check korbe
*/
//1st:
const first =2;
const second ="2";
if(first===second){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}

// double equal == dile hole true;
//triple equal === dile bole false;

//difference:
/*== equal dile strick check korbe na,
mane 2 akta sonkha, "2" akta string, tai ata soman na bt taw jehetu 2
tai == equal dile bolbe soman, so true*/

/*=== khub strick, se dekhbe je akta 2 sonkha arekta string
so se bolbe ata ak na, false*/


//2nd:
const first =2;
const second =true;
if(first==second){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}

// double equal == dile hole flase;
//triple equal === dile bole false;


const first =1;
const second =true;
if(first===second){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}

// double equal == dile hole true;
//triple equal === dile bole false;

/* akhne == e true bolar karon hocche,
JAVASCRIPT 1 ke truthy value and 0 ke falsy value mone kore;
tai jehetu 1==true er moddhe compare asche tai atake se true bolse;

bt === jehetu type check kore tai akta INT arekta bool,
tai false bolse, cz === type & value check kore
*/

const first =0;
const second =false;
if(first===second){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}

// double equal == dile hole true;
//triple equal === dile bole false;

// karon 0 ke false mone kore JS