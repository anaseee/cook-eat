function calculate() {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var operator = document.getElementById("op").value;
    var result = 0;

    if (operator == "addition") {
        result = x + y;
    }
    else if (operator == "subtraction") {
        result = x - y;
    }
    else if (operator == "multiplication") {
        result = x * y;
    }
    else {
        result = x / y;
    }
    document.getElementById("textid").innerText = result;
    event.preventDefault()

}