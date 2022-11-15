let abtn = document.querySelector("#mybtn");

abtn.addEventListener('click',btnHandler, false);


function btnHandler(e)
{

    let Person = {

        //has an fname by default
        fname : "NoFName",

        getNames : function(){
            return "The name is " +this.fname+" "+this.lname;
        }
    }
    
    //define an object
    let employee1 =  {};
    
    //add properties
    employee1.fname = "Prabhu";
    employee1.lname = "Missier";
    
    
    //create an object based on a prototype
    let employee2 = Object.create(Person);
    employee2.fname = "Albert";
    employee2.lname = "Costa";

    //doesn't have a fname
    let employee3 = Object.create(Person);    
    employee3.lname = "Davis";

    //function only applies to employee3
    employee3.showlname = function()
    {
        return this.lname;
    }

    //console.log('Employee1 details ' + employee1.getNames()); //can't be done

    console.log('Employee1 details ' + employee1.fname + " " + employee1.lname);
    console.log('Employee2 details ' + employee2.getNames());
    console.log('Employee3 details ' + employee3.getNames());

    //console.log('Employee2 lname ' + employee2.showlname()); //not defined for employee2
    console.log('Employee3 lname ' + employee3.showlname());    

}