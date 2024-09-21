
let one;
let two;
let total;




document.getElementById("add").onclick = function() {

    one = document.getElementById("one").value;
    two = document.getElementById("two").value;

    one = Number(one)
    two= Number (two)

    total= one + two ;

    document.getElementById("total").innerHTML= total

}


document.getElementById("subtract").onclick = function() {

    one = document.getElementById("one").value;
    two = document.getElementById("two").value;

    one = Number(one)
    two= Number (two)

    total= one - two ;

    document.getElementById("total").innerHTML= total

}


document.getElementById("divide").onclick = function() {

    one = document.getElementById("one").value;
    two = document.getElementById("two").value;

    one = Number(one)
    two= Number (two)

    total= one / two ;

    document.getElementById("total").innerHTML= total

}

document.getElementById("multiply").onclick = function() {

    one = document.getElementById("one").value;
    two = document.getElementById("two").value;

    one = Number(one)
    two= Number (two)

    total= one * two ;

    document.getElementById("total").innerHTML= total

}

