function stopWatch(){
    let count =0;
    return function(){
        count++;

        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

/* kono akta function theke jodi arekta function ke jodi 
call kori ba return kori tahole se akta close environment toiri kore fele
tokhn seta jodi kno variable e rakha hoe tahole pottekta variable tar nijesso value rakhbe
and sei jnno, clock1 4bar call korar por clock2 2bar call korae
clock1, 1,2,3,4 ase clock2 5,6 na ase 1,2 ase/cz clock2 akada kore 2bar call korese
tai se nijer value 1,2 rakhse
and pore clock1 abr call krle 5 asche and clock2 abr call krle 3 asche
karon tara nijer moddhe close environmnt toiri korse,
nijesso scope..........


jodi kono function er moddhe jodi arekta function thake, tahole oi 2nd function
ta jodi amra return kori ba vitore use kori, tahole akta close environment toiri hbe
tokhn tara nijera externel variable e akta reference rekhe dea atakei closure bole.