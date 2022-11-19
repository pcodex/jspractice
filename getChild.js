//using children, tagName, nextSibling, previousSibling

let mybtn = document.querySelector('#plain');

mybtn.addEventListener('click',plainHandler,false);

function plainHandler(e)
{

    let bodyElem = window.document.body;

    let bodyChildren = bodyElem.children;

    console.log('Body has '+bodyChildren.length+' nodes');

    console.log('The last child is '+ bodyChildren[6].tagName);

    console.log('The 1st child is '+ bodyChildren[0].tagName);

    //firstChild doesn't seem to work so using firstElementChild. firstChild detects spaces
    console.log('THe first child is '+ bodyElem.firstElementChild.tagName);

    //nextSibling won't work since it detects a space as the next sibling
    console.log('Sibling for H1 is ' + bodyElem.children[0].nextSibling.tagName);

    //use nextElementSibling
    console.log('Sibling for H1 is ' + bodyElem.children[0].nextElementSibling.tagName);

    //use previousElementSibling. Should return img since last child in index.html is a script tag
    console.log('Previous Sibling for last child is ' + bodyElem.lastElementChild.previousElementSibling.tagName);
}