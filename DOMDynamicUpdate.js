/*Demonstrate the use of 
1.createElement
2.appendChild
3.insertBefore
4.removeChild
5.remove
6.cloneNode
*/


let bodyElem = document.querySelector("body");

//create a new paragraph
let newP1 = document.createElement("p");
newP1.textContent = "Watch TV";
//append it to the end of the body after the script tag
bodyElem.appendChild(newP1);

//remove it
bodyElem.removeChild(newP1);

//add it before the script tag
bodyElem.insertBefore(newP1, bodyElem.lastChild);



let newP2 = document.createElement("p");
newP2.textContent = "Study JavaScript";

//insert newP2 before newP1
//newP1.parentNode == body
newP1.parentNode.insertBefore(newP2, newP1);

//simulate newP3 insertAfter newP2 which is similar to insertBefore newP1
let newP3 = document.createElement("p");
newP3.textContent = "Eat Breakfast/Drink milk"
bodyElem.insertBefore(newP3, newP2.nextSibling);

//remove a child
let p4 = document.createElement("p");
p4.textContent = "This is rubbish";
//add the p element
bodyElem.appendChild(p4);

//always remove an element from its parent
p4.parentNode.removeChild(p4);

//other ways to remove
//bodyElem.removeChild(p4);
//p4.remove();


setInterval(addElems, 2000);
let p5 = document.createElement('p');
p5.textContent = "Read my novel";
bodyElem.insertBefore(p5, bodyElem.lastChild);


function addElems()
{
    //true is needed since all child nodes of the paragraph including the text content has to be cloned
    //the paragraph element doesn't have child elements but the text content is a child node
    let clonedP = p5.cloneNode(true);
    let todayDate = new Date(Date.now());
    let tdateStr = todayDate.toDateString();
    clonedP.textContent += " "+tdateStr+" "+todayDate.getHours()+":"+todayDate.getMinutes()+":"+todayDate.getSeconds();

    //the last child is the script element
    bodyElem.insertBefore(clonedP, p5.parentNode.lastChild);    
}
