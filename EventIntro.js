document.addEventListener('dblclick',changeColor, false);


function changeColor(ev)
{
    let myg = Math.round(Math.random()*100);
    let myr = Math.round(Math.random()*100);
    let mycolor = "#"+myr.toString()+myg.toString()+"00";
    
    document.body.style.backgroundColor=mycolor;
}

let abtn = document.querySelector('#mybtn');

abtn.addEventListener('click', addText, false);

function addText(event)
{

    let bodyElem = document.body;
    let newP = document.createElement('p');
    newP.textContent = "Text added when the button click event is fired";

    bodyElem.insertBefore(newP, bodyElem.lastElementChild);
}