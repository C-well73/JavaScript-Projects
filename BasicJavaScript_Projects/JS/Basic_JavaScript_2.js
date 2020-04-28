function My_Second_Function()
{
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

function myTogether()
{
    var sentence = "This coding thing is";
    sentence += " a bit harder than I imagined!";
    document.getElementById("JoinTogether").innerHTML=sentence;
}
