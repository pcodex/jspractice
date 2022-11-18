//Using classList : add, remove, contains, toggle


let mybtn = document.querySelector("#plain");
mybtn.addEventListener('click',handlePlainBtn,false);

let mybtn2 = document.querySelector("#special");
mybtn2.addEventListener('click', handleSpecialBtn, false);

let mybtn3 = document.querySelector("#toggle");
mybtn3.addEventListener('click', handleToggleBtn, false);


function handlePlainBtn()
{
  //select all paragraph elements
  let pelems = document.querySelectorAll("p");
  
  //select the H1 element
  let thdr = document.querySelector('#topheader');
  
  //check if it contains special in its class list and remove it
  if(thdr.classList.contains('special')){
    
    thdr.classList.remove('special');    

  }
  //add plain to the class list
  thdr.classList.add('plain');

   for(let i=0; i<pelems.length; ++i){
    
    //check for special and remove it from every p element
    if(pelems[i].classList.contains('special') == true)
    {
        console.log('Special class removed from paragraph');
        pelems[i].classList.remove('special');
    }

    //add plain to every p element
    pelems[i].classList.add('plain');
    console.log('Plain class added for paragraphs');    

   }  

}


function handleSpecialBtn()
{
  //select all paragraph elements
  let pelems = document.querySelectorAll("p");

  //select the H1 element
  let thdr = document.querySelector('#topheader');
  if(thdr.classList.contains('plain')){
    
    thdr.classList.remove('plain');    

  }
  thdr.classList.add('special');

   for(let i=0; i<pelems.length; ++i){
    if(pelems[i].classList.contains('plain') == true)
    {
        pelems[i].classList.remove('plain');
        console.log('Plain class removed from paragraph')
    }
    
    //add the special class to the list for every p element
    pelems[i].classList.add('special');
    console.log('Special class added for paragraphs');
   }  

}

function handleToggleBtn()
{

    let allps = document.querySelectorAll('p');

    //keep toggling for every p element
    for(let z=0; z<allps.length;++z){
        allps[z].classList.toggle('togglebgnd');

        console.log("Class list "+allps[z].classList);
    }

}