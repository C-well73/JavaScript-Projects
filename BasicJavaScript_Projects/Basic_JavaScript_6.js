function Ride_Function()
{
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function CanVote_Function()
{
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not Legally eligible": "You are Legally eligible";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//When I pick up on this, I think I need to create my own object like above.

/*function assignFunction {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;

}*/

function House(Year, Rooms, Color, Level) {
    this.House_Year = Year;
    this.House_Rooms = Rooms;
    this.House_Color = Color;
    this.House_Level = Level;
}
var Carmen = new House(2019, 4, "White", "Double" );
var Ruby = new House(1987, 2, "Yellow", "Single");
var Sterling = new House(2000, 5, "Green", "Three");
function assignFunction(){
    document.getElementById("New_and_This").innerHTML = "This house for sale is a " + Carmen.House_Year + " with " + Carmen.House_Rooms + " bedrooms" + " and  "  + Carmen.House_Level + " level.";
}

function nested_Function(){
    document.getElementById("Nested_Function").innerHTML = Increase();
    function Increase(){
        var start = 1;
        function Add_to() {start += 2;}
        Add_to();
        return start;
    }
}

