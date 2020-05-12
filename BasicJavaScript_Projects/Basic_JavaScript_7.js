var X = 10;
	function Add_digit_1(){
        var Y = 20;
        document.write(20 + X + "<br>");
        document.write(10 + Y + "<br>")
		}
		function Add_digit_2(){
			document.write(X + 100);
        }
        function Add_digit_2(){
            console.log(Z + 50);
        }
		Add_digit_1();
        Add_digit_2();
        
        function get_Date(){
            if (new Date().getHours() > 8 ){
            document.getElementById("Goodmorning").innerHTML = "Goodmorning to you, I hope you slept well?";}
            }
        function Age_Function(){
            Age = document.getElementById("Age").value;
            if (Age >= 21){
                Drink = "Have a seat, what would you like to drink?";
            }
            else {
                Drink = "Come back when you are old enough to have a seat!";
            }

            document.getElementById("What_is_the_Legal_age?").innerHTML = Drink;
        }

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)
    {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

    