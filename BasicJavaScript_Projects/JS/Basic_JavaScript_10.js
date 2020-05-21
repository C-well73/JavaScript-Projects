function count_To_Twenty() {
    var Digit = "";
    var X = 1;
    while (X <= 20){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function lengthFunction(){
    var str = "Let's make a lengthy sentence here!"
    var res = str.length;
    document.getElementById("lengthy").innerHTML = res;
}

var Instruments = ["Piano", "Flute", "Drums", "Violin", "Heart", "Trumpet", "Saxaphone"];

var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){
    var Me_active = []
    Me_active[0] = "lifting";
    Me_active[1] = "swimming";
    Me_active[2] = "riding my bike";
    Me_active[3] = "coding";
    document.getElementById("Array").innerHTML = "In this picture, I am  " + Me_active[2] + ".";
}

function constant_function(){
    const My_Pet = {type:"Pitbull", brand:"Bluenose", color:"grey"};
    My_Pet.type = "Snake";
    My_Pet.size = "large";
    document.getElementById("Constant").innerHTML = "My new " + My_Pet.type + " is " + My_Pet.size + " and scary!";
}

var roast = "Your Momma is so ugly, she spoiled the milk when they placed her on the back of the carton!";
document.write(roast);
{
    let roast = "Your Momma is so Skinny, she can hoola hoop through a cherio!";
    document.write("<br>" + roast);
}
document.write("<br>" + roast);

function addThree (num1, num2, num3) {
    return (num1+num2+num3);
}

var x = 5, y = 7, result;
result = addThree(x,y,11);
alert(result);
// function my_returnFunction(){
//     return Math.PI;
// }

// document.getElementById("return").innerHTML = my_returnFunction();

let house = {
    make: "5 Bedrooms ",
    model: "Viper ",
    year: "2098 ",
    color: "yellow ",
    description : function() {
        return "The house is a " + this.year + this.color + this.make + this.model;}
    };
    document.getElementById("House_Object").innerHTML = house.description();
var x = 0;
while (x < 10){
    x = x + 1;
    if (x == 3)
        continue;

    document.write(" x = " +x);
    if (x == 5)
        break;
}
document.write("Loop done");
