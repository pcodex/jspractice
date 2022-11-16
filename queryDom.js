let mybtn = document.querySelector("#mybtn");
let mybtn2 = document.querySelector("#mybtn2");

mybtn.addEventListener('click', afun, false);
mybtn2.addEventListener('click', afunchange, false);

function afun()
{

    //querySelector is preferred over getElementById, getElementByTagName etc.
    let myimg = document.querySelector("#myimg");

    //you can also use getAttribute
    console.log("My image is located at "+myimg['src']);

    myimg.setAttribute('src', 'C:/Users/pm/Downloads/p2.jpg')

}

function afunchange()
{

let myimg = document.querySelector("#myimg");

myimg.setAttribute('src', 'C:/Users/pm/Downloads/pm.jpg');

}