function addition_Function(){
    var addition = 10 + 8;
    document.getElementById("Math").innerHTML = "10 + 8 = " + addition;
}

function sub_Function()
{   
var Subtraction = 12 - 6;
document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;

}

function multiply_Function()
{
    var Multiplication = 8 * 8;
    document.getElementById("Math").innerHTML = "9 * 9 = " + Multiplication;
}

function divide_Function()
{
    var Division = 20 / 5;
    document.getElementById("Math").innerHTML = "100 / 10 " + Division;

}

function multiple_Function() 
{
  var simple_Math = (1 + 2) * 10 / 2 -5;
  document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;  
}

function modulus_Function() 
{
    var simple_Math = 18 % 7;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Function()
{
    var x = 26;
    document.getElementById("Math").innerHTML = -x;
}

var x = 20;
	x++;
    document.write(x);
    
    var y = 10.25;
	y--;
	document.write(y);

    window.alert(Math.random() * 10);
    
    function round_Function(){
        var a = Math.round(4.4);
        document.getElementById("round").innerHTML = Math.round(4.4);
    }
    

