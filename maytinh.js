function clickButton(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let operator = document.getElementById('operator').value;
    let result;
    if (operator == "+"){
        result = parseInt(number1) + parseInt(number2);
        document.getElementById('result').value = result;
    } else if (operator == "-"){
        result = parseInt(number1) - parseInt(number2);
        document.getElementById('result').value = result;
    }else if (operator == "*"){
        result = parseInt(number1) * parseInt(number2);
        document.getElementById('result').value = result;
    }else{
        if (number2 == 0) {
            alert('can not div 0');
        }else {
            result = parseInt(number1) / parseInt(number2);
            document.getElementById('result').value = result;
        }
    }

}