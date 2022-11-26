function calcResult(operation){
    let num1=Number(document.form1.num1.value)
    let num2=Number(document.form1.num2.value)
    let resultElement=document.getElementById("result")
switch (operation) {
    case 'add':
        resultElement.value=(num1+num2);
        break;
    case 'subtract':
        resultElement.value=(num1-num2);
        break;
    case 'multiply':
        resultElement.value=(num1*num2);
        break;
    case 'divide':
        resultElement.value=(num1/num2);
        break;
    default:
        resultElement.value='Error';
    }
}

function clearResult() {
    document.getElementById("result").value="";
    console.log('inner text')
}