let EmployeeTemplate = {
    _allNames : [],
    _otherNames : [],
    _fname : "",
    _lname : "",
    _age : 0,

    get fname()
    {
        return this._fname ;        
    },

    get lname()
    {
        return this._lname ;        
    },

    get otherNames()
    {                
        for(let nm = 1; nm<this._allNames.length-1; nm++)
        {           
            this._otherNames.push(this._allNames[nm]);
        }

        return this._otherNames;
    },

    set name(val)
    {
        this._allNames = val.toUpperCase().split(' ');
        this._fname = this._allNames[0];
        this._lname = this._allNames[this._allNames.length-1];        
    },

    set age(val)
    {
        this._age = val+10;
    },

    get age()
    {
        return this._age;
    }
};

let mybtn = document.querySelector('#mybtn');

mybtn.addEventListener('click', onmyBtn, false);

function onmyBtn(e)
{
    let emp1 = Object.create(EmployeeTemplate);
    emp1.name = "Joseph Antony PrabHU MiSSiEr";   
    emp1.age = 32;

    console.log('First Name : ' + emp1.fname);
    console.log('Last Name : ' + emp1.lname);
    console.log('Other Names : ' + emp1.otherNames);
    console.log('Age is : ' + emp1.age);
}