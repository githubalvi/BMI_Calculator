// script.js

const calculateBMI = () => {
    const weight = document.getElementById("weightInput").value;
    const heightInput = document.getElementById("heightInput").value;
    const gender = document.getElementById("genderInput").value;
    let heightMeters;
  
    if (gender === "male") {
      // If the user is male, convert the height input in inches to meters
      if (document.getElementById("unitInput").value === "inches") {
        heightMeters = heightInput / 39.37; // 1 inch is equal to 0.0254 meters
      } else {
        heightMeters = heightInput / 100; // If the user inputs height in centimeters
      }
    } else {
      // If the user is female, convert the height input in centimeters to meters
      if (document.getElementById("unitInput").value === "inches") {
        heightMeters = heightInput / 39.37 / 0.39370; // Convert inches to centimeters first
      } else {
        heightMeters = heightInput / 100; // If the user inputs height in centimeters
      }
    }
  
    const bmi = weight / (heightMeters * heightMeters);
    
    document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
  

  