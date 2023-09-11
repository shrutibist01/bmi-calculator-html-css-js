function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Please enter valid height and weight.";
        document.body.className = "default"; 
    }

    var bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5) {
        category = "underweight";
    } else if (bmi < 25) {
        category = "normal";
    } else if (bmi < 30) {
        category = "overweight";
    } else {
        category = "obese";
    }

    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
    document.body.className = category;
}
