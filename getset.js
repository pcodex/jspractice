//Using getAttribute(), setAttribute, className, textContent, id


let mybtn = document.querySelector("#mybtn");

mybtn.addEventListener('click',handleClick,false);

let mybtn2 = document.querySelector("#mybtn2");
mybtn2.addEventListener('click', handleBtn2, false);


function handleClick()
{
    let h1elem = document.querySelector("h1");

    console.log("h1 id is "+h1elem.getAttribute("id"));


    let cname = h1elem.getAttribute('class');
    console.log("The h1 class is  "+cname );

    if(cname === null)
    h1elem.setAttribute('class', 'allHeaders');
    else
    h1elem.removeAttribute('class');
    
    //reset h1's id
    h1elem.setAttribute("id","firstHeader");
    h1elem.textContent = "This is a new beginning";
    
    console.log("h1 id is "+h1elem.getAttribute("id"));

}

function handleBtn2()
{
    let myimg = document.querySelector('img');

    let myimgsrc = myimg.getAttribute('src');

    if(myimgsrc.indexOf('p2') >= 0)
        myimg.setAttribute('src', 'C:\\Users\\pm\\Downloads\\prabSJose.jpg')
    else
        myimg.setAttribute('src', 'C:\\Users\\pm\\Downloads\\p2.jpg')

}