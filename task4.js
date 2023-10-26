const myInput = document.querySelectorAll(".arr");
const myDiv = document.querySelector(".out");
const myButton = document.querySelector(".btn");

myButton.addEventListener("click", function (e){
    e.preventDefault();
    let result = "";
    myInput.forEach((input) => {
        const fieldName = input.getAttribute("data-form");
        const fieldValue = input.value;
        result += `${fieldName}: ${fieldValue}<br>`;
    });
    myDiv.innerHTML = result;
});