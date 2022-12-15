//capture events for children at the parent
//create only one event listener and one event handler

let bdy = document.querySelector('body');

//this div contains the 3 buttons as well as the H1 and paragraph P1
let adiv = document.querySelector('#ParentDiv');

//add the listener at the top of the hierarchy
adiv.addEventListener('click', clickHandler, false);

//create a paragraph
let resultP = document.createElement('p');


//this function will handle clicks on any child element of the Div
function clickHandler(e)
{

//check if the event's final target is one of the children and not the Div on which we have attached
//the event listener
    if(e.target != e.currentTarget){

        console.log('Event captured');

        bdy.insertBefore(resultP, bdy.lastChild);
        resultP.textContent = e.target.id + ' has been clicked';
        
    }

    //stop the event from bubbling upwards
    e.stopPropagation();

}
