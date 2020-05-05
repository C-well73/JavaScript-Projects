function typeOf_Function(){
document.getElementById("type").innerHTML = typeof "Bryant" + "<br>" +
typeof "5.980" + "<br>" + typeof NaN + "<br>" + typeof false + "<br>" +
typeof [1,2,3,4] + "<br>" + typeof {name: "Bryant", age: 18} + "<br>" +
typeof new Date() + "<br>" + typeof function () {} + "<br>" +
typeof myCar + "<br>" + typeof null;
}

function my_Infinity()
{
    var infinite = 2E310;
    var negInfinite = -3E310;
    document.getElementById("Infinity").innerHTML= infinite;
    document.getElementById("Infinity").innerHTML= negInfinite;

}

function my_Bool()
{
    var great = 5 > 10;
    document.getElementById("greater").innerHTML= great;
}

function your_Bool()
{
    var less = 5 < 10;
    document.getElementById("lesser").innerHTML= less;
}

var myAddition = 3 + 3;
console.log(myAddition);

function my_Coercion()
{
    var mix = "40" + 20;
    document.getElementById("mixed").innerHTML= mix;

}

var isFalse = 5 > 25;
console.log(isFalse);

function my_true()
{
    var truth =  100 == 100;
    document.getElementById("truest").innerHTML= truth;

}

function my_false()
{
    var falsify =  100 == 1000;
    document.getElementById("falstest").innerHTML= falsify;

}

function my_Othertrue()
{
    var truthy =  "Bryant" === "Bryant";
    document.getElementById("Othertrue").innerHTML= truthy;

}

function my_Otherfalse()
{
    var falsity =  "Caldwell" === 8;
    document.getElementById("Otherfalse").innerHTML= falsity;

}

function my_Otherfalse2()
{
    var otherFalse =  "five" === 5;
    document.getElementById("Anotherfalse").innerHTML= otherFalse;

}

function my_Otherfalse3()
{
    var otherOtherFalse =  "five" === "six";
    document.getElementById("AnotherOtherfalse").innerHTML= otherOtherFalse;

}


function my_true4()
{
    var otherOtherotherTrue =  (100 > 99 && 99 < 100);
    document.getElementById("AnotherTrue").innerHTML= otherOtherotherTrue;

}

function my_false4()
{
    var otherOtherotherFalse =  (100 > 99 && 99 > 100);
    document.getElementById("AnotherFalse").innerHTML= otherOtherotherFalse;

}

function my_true5()
{
    var otherOtherotherTrue2 =  (100 > 99 || 99 > 100);
    document.getElementById("AnotherTrue2").innerHTML= otherOtherotherTrue2;

}

function my_false5()
{
    var otherOtherotherFalse2 =  (100 < 99 || 99 > 100);
    document.getElementById("AnotherFalse2").innerHTML= otherOtherotherFalse2;

}

function not_Function()
	{
        var itIsSo = !(20 > 10);
		document.getElementById("yesItIs").innerHTML = itIsSo;
    }
    
    function itIs_Function()
	{
        var IsSo = !(20 < 10);
		document.getElementById("ItIsnot").innerHTML = IsSo;
	}
