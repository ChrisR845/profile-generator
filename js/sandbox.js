let profileForm = document.getElementById("profile").value;
let nameInput = document.getElementById("name").value;
let ageInput = document.getElementById("age").value;
let pets = document.querySelectorAll("input[type='radio']");
let hobby = document.querySelectorAll("input[type='checkbox']");


  function getValue() {
            let inputField = document.getElementById("myInput");

            let value = inputField.value;
            alert("Input value: " + value);
  }