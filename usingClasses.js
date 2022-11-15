let abtn = document.querySelector("#mybtn");

abtn.addEventListener("click",cfunc, false);


//using classes which were introduced in ES6
class Planet
{
    constructor(size, color)
    {
        this._size = size;
        this._color = color;
    }

    //setter functions as before
    set planetSize(sz){
        this._size = sz;
    }

    //getter functions
    get planetSize()
    {
        return this._size;
    }

    set planetColor(color)
    {
        this._color = color;
    }

    get planetColor()
    {
        return this._color;
    }

    //Base class attributes and the derived class attributes can also be accessed here
    display(){
        console.log("Planet details: The size of the planet is "+this._size+" and the color is "+this._color+
        " and populations is "+this._population);
    }
}

class Earth extends Planet{

    constructor(size,color,population){
        super(size,color);

        this._population = population;
    }

    set population(pop)
    {
        this._population=pop;
    }

    get population(){
        return this._population;
    }

    //we don't need this display function since the base class display function can access derived attributes
    getEarthDetails()
    {
        console.log("Earth details : Size : "+this._size+" Color : "+this._color+" Population : "+this._population);
    }
}


function cfunc(e)
{

    let myPlanet = new Earth(23,'blue',928);

    myPlanet.display(); //calling base class function
    //myPlanet.getEarthDetails(); //calling child class

    myPlanet.planetSize = 29399;
    myPlanet.planetColor  = 'red';

    console.log("Earth's size is now "+myPlanet.planetSize);
    console.log("Earth's color is now "+myPlanet.planetColor);

    //myPlanet.getEarthDetails();
    myPlanet.display(); //calling base class function

    myPlanet.population = 284792;
    console.log("Earth's population is now "+myPlanet.population);
    //myPlanet.getEarthDetails();
    myPlanet.display(); //calling base class function


}