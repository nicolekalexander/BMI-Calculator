//function that calculates bmi from age, weight, and height
const bmiCalculate = (height, weight) => { 
    // return bmi 
    return (weight/(height**2)) * 703   
   
}


// function that determines weight class from bmi
const getWeightClass = (bmi) => {
     
    if (bmi < 18.5) {
        return "underweight"
    } else if (bmi < 25) {
        return "normal weight"
    } else if (bmi < 30) {
        return "overweight"
    } else {
        return "obese"
    }
}

$("#userResults").hide()
const urlParams = new URLSearchParams(window.location.search);
const userHeight = urlParams.get('height')
const userWeight = urlParams.get('weight')

if (userHeight && userWeight) {
    const userBMI = bmiCalculate(userHeight, userWeight)
    console.log(userBMI)
    const userWeightClass = getWeightClass(userBMI)
    console.log(userWeightClass)

    $("#userResults").show()
    $("#userBMI").text(Math.round(userBMI), 2)
    $("#userWeightClass").text(userWeightClass)
    $("#userHeight").text(userHeight + " inches")
    $("#userWeight").text(userWeight + " pounds")
}

$("#calculateBMI").on("click", () => { 
          $("#calculateBMI").addClass('animated bounceOut');
          return false;
})
