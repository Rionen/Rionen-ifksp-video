//A global name két különböző változó (nem néz ki)
/*var globalName="Joe";
function somthing()
{
    var globalName="Jack";
    console.log(globalName);
}
somthing();
console.log(globalName);
Jack Joe*/

//A benti name megválltozttja a külső értékét(kinéz)
/*var globalName="Joe";
function somthing()
{
    globalName="Piri";
    console.log(globalName);
}
somthing();
console.log(globalName);
Piri Piri*/



//Ez két különböző változó a let blokk szintű (nem néz ki)
/*let name="Sanyi";
{
    let name="Pisti";
    console.log(name);
}
console.log(name);
//Pisti Sanyi




//A benti name megválltozttja a külső értékét(kinéz)
/*let name="Sanyi";
{
    name="Pisti";
    console.log(name);
}
console.log(name);
//Pisti Pisti*/

/*let globalName="Joe";
{
    console.log(globalName);
    globalName="Piri";
    console.log(globalName);
}

console.log(globalName);
*/
const globalName="Joe";
{
    
    const globalName="Piri";
    console.log(globalName);
}

console.log(globalName);
