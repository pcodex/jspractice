/*
click
dblclick
mouseover
mouseout
mouseenter
mouseleave
mousemove
mouseup
mousedown
contextmenu
mousewheel or DOMMouseScroll
*/

/*
screen position - .screenX, .screenY
browser position - .clientX, .clientY
button number - .button
*/

document.addEventListener('contextmenu', ctxHandler, false);
document.addEventListener('mousewheel', wheelHandler, false);


let bodyelem = document.querySelector('body');

//bodyelem.addEventListener('mousemove', moveHandler, false);
bodyelem.addEventListener('mousedown', downHandler, false);
bodyelem.addEventListener('mouseup', upHandler, false);



let abtn = document.querySelector("#pbtn");

abtn.addEventListener('click', clickHandler, false);
abtn.addEventListener('dblclick', dblclickHandler, false);
abtn.addEventListener('mouseover', overHandler, false);
abtn.addEventListener('mouseout', outHandler, false);




function clickHandler(e)
{
 console.log('Button clicked');
}

function dblclickHandler(e)
{
 console.log('Button dbl clicked');
}

function overHandler(e)
{
 console.log('Button hovered');
}

function outHandler(e)
{
 console.log('Button hover exited');
}

function moveHandler(e)
{
 console.log('Mouse moved to screenX ' + e.screenX + ' and screenY '+e.screenY);
 console.log('Mouse moved to clientX ' + e.clientX + ' and clientY '+e.clientY);
}

function downHandler(e)
{
    console.log('Down event detected');
}

function upHandler(e)
{
    console.log('Up event detected');
}


function ctxHandler(e)
{
    e.preventDefault();
    console.log('Ctx menu blocked');
}


function wheelHandler(e)
{    
    console.log('Wheel event '+ e.wheelDelta);
}
