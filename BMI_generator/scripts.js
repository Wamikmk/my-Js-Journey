const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#results");
    const message = document.querySelector('#message');

    if (height === "" || height < 0 || isNaN(height)) {

        result.innerHTML = "Enter a valid Height"
    }

    else if (weight === "" || weight < 0 || isNaN(weight)) {

        result.innerHTML = "Enter a valid Height"
    }

    else {
        const BMI = (height/1000) * weight
        result.innerHTML = `Your Body Mass Index is ${BMI}`
   
    }
    
    const BMI =  (height/1000) * weight
    if (BMI < 18.6) {
        message.innerHTML = "You are Under Weight"
    }

    else if (BMI > 18.6 && BMI < 24.9) {
        message.innerHTML = "You are in the Normal Range"
    }

    else if (BMI > 24.9) {
        message.innerHTML = "You are Over Weight"
    }

});