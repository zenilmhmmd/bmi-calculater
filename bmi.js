function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi=weight/(height*height);

    document.getElementById('bmi-result').textContent=bmi.toFixed(2);

    let category;
    if (bmi<18.5) {
        category="Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('bmi-category').textContent=category;
}
