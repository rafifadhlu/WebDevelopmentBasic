
function bmi(value1, value2){
     let result = (value1/(value2/100)^2);
     
     if (result >= 30){
        document.getElementById('result').innerHTML = `Your BMI ${result} its Obesity`
     }else if(result >= 25 && result <= 29.9){
        document.getElementById('result').innerHTML = `Your BMI ${result} its Overweight`
     }else if(result >= 18.5 && result <= 24.5){
        document.getElementById('result').innerHTML = `Your BMI ${result} its Normal Weight`
     }else{
        document.getElementById('result').innerHTML = `Your BMI ${result} its Underweight`
     }
}



function submit (Value1 ,Value2) {
        let weightValue = document.getElementById("weight").value;
        let heightValue = document.getElementById("height").value;
        bmi(weightValue, heightValue)
}