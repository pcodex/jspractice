//Handling keyboard events
//keyup
//keydown
//keypress - fired only for alphanumerics

//e.keyCode - keycode
//e.charCode - character code obtained only for keypress events
//e.ctrlKey, e.shiftKey, e.altKey - true if the respective keys are pressed
//e.metaKey - true if the Windows key is pressed or Command on Mac


//keypress event is fired only for alphanumeric keys
document.addEventListener('keypress', pressHandler, false);

//keydown is fired for all keys
document.addEventListener('keydown', downHandler, false);

//keyup is fired for all keys
document.addEventListener('keyup', upHandler, false);

let dwnpara = document.querySelector("#kbdinfo");

let presspara = document.createElement("p");
let bdy = document.querySelector("body");
bdy.insertBefore(presspara, bdy.lastElementChild);

//use an array to mark a keycode as true if it has been pressed
let keys = [];

function downHandler(e)
{
    
    //set the keycode as true if it has been pressed down
    keys[e.keyCode] = true;

    presspara.textContent = "";
    dwnpara.textContent = "The keycode is "+e.keyCode;

    //keyCode for shift is 16 and 17 for ctrl and 18 for alt
    if(keys[17] == true && keys[18] == true  && keys[46] == true){
        e.preventDefault();
        dwnpara.textContent += ". Ctrl and Alt and Del have been pressed";
    }

        if(keys[16] == true && keys[17] == true  && keys[18] == true)
        dwnpara.textContent += ". Shift and Ctrl and Alt have been pressed";

        //alternate way
        if(e.ctrlKey == true)
            dwnpara.textContent += ". Ctrl has been pressed";

            if(e.shiftKey == true)
            dwnpara.textContent += ". Shift has been pressed";

            if(e.altKey == true)
            dwnpara.textContent += ". Alt has been pressed";

            //used to identify the Windows key
            if(e.metaKey == true){
            //don't display the Start menu by default when you press the Window key
            e.preventDefault();

            dwnpara.textContent += ". Win key has been pressed";
            
            
            }


    switch(e.keyCode)
    {
        case 37:
            dwnpara.textContent += ". Left key";
            break;

        case 38:
            dwnpara.textContent += ". Up key";
            break;
            
            case 39:
            dwnpara.textContent += ". Right key";
            break;

            case 40:
            dwnpara.textContent += ". Down key";
            break;

            default:
                break;
    }
    
    console.log("The keycode is "+e.keyCode);    
}

function upHandler(e)
{

    keys[e.keyCode] = false;

}

function pressHandler(e)
{
    presspara.textContent = "The charcode is "+e.charCode;
    
    console.log("The keycode is "+e.charCode);
}