let abtn = document.querySelector("#mybtn");

abtn.addEventListener("click", aprotofn, false);


function aprotofn(e)
{

    Array.prototype.PrabDisplay = function() {
        console.log("This is a special function which displays arrays");
        console.log(this);//this points to the object which called the function
    }


    let prabarr = ['HMB', 'CastleRock', 'Land\'s End', 'Tahoe'];

    prabarr.PrabDisplay();

}