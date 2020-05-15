function join_Us(){
    var sent_1 = "Hello, would you ";
    var sent_2 = "like to ";
    var sent_3 = "join us for ";
    var sent_4 = "a coding meet up?";
    var joined_sentence = sent_1.concat(sent_2, sent_3, sent_4);
    document.getElementById("We_are_joined").innerHTML = joined_sentence;
}

function slice_Method(){
    var Sentence ="Learning to program has been FUN and difficult at the same time.";
    var Section = Sentence.slice(29, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method(){
    var Sentence_2 = "I am still learning to program";
    var result = Sentence_2.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

function search_Method(){
    var Sentence_3 = "Still learning to program";
    var result_2 = Sentence_3.search("to");
    document.getElementById("Search").innerHTML = result_2;
}

function number_Method(){
    var Uno = 10;
    document.getElementById("Number").innerHTML = Uno.toString();
}

function accurate_Method(){
    var exact = 18973.098737478;
    document.getElementById("Precise").innerHTML = exact.toPrecision(12);
}
function fixed_Method(){
    var fixed = 98.32654898;
    var fixed_res = fixed.toFixed(6);
    document.getElementById("Fixed").innerHTML = fixed_res;
}
function value_Method(){
    var quote = "Try not to become a man of success. Rather become a man of value.";
    var result_3 = quote.valueOf();
    document.getElementById("Value").innerHTML = result_3;
}