let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let colorInput = document.getElementById("colorInput");
let submitBtn = document.getElementById("submitBtn");
let output = document.getElementById("output");

submitBtn.addEventListener("click", getInfo);

  function getInfo() { 
    output.textContent = `Name: ${nameInput.value}, Age: ${ageInput.value}, Favorite Color: ${colorInput.value}';
    }
