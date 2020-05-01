function my_Car()
	{
		var Car = {
			Type:"Sedan",
			Color:"Black",
			Model:"Bentley",
			Year:2021,
            Engine:"V12!"          
        };
        delete Car.Engine;
        document.getElementById("Car").innerHTML = Car.Engine;
    }