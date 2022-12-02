let bodyElem = document.querySelector('body');


let btnElem = document.querySelector('#abtn');
let hdrElem = document.querySelector('#tophdr');



//true - capture the event in the 'Event Capture' phase
//false - capture event in the 'Event bubbling up' phase

bodyElem.addEventListener('click', stopEventProp, true);

function stopEventProp(ev)
{
//capture the event when it trickles down and stop it from being propagated
    console.log("Event Propagation stopped");
    let newP = document.createElement('p');
    newP.textContent = "Button click should cause a color change but the event is captured at the body and prevented from propagating"
    bodyElem.insertBefore(newP,bodyElem.lastChild);

    ev.stopPropagation();
    hdrElem.style.fontSize = "40px";
}



btnElem.addEventListener('click', changeColor, false);

//this function will never fire since the event is stopped from being propagated
function changeColor(ev)
{
    console.log('Button click handled');
    document.body.style.backgroundColor="#ffbbcc";
}