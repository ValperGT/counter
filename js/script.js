const $buttonDecrease = document.querySelector("[data-button-decrease]");
const $buttonReset = document.querySelector("[data-button-reset]");
const $buttonIncrease = document.querySelector("[data-button-increase]");
const $counterNumber = document.querySelector("[data-counter-number]");

function checkNumber() {
    if (parseInt($counterNumber.innerText) > 0) {
        $counterNumber.style.color = "#2DC937";
    } else if (parseInt($counterNumber.innerText) < 0) {
        $counterNumber.style.color = "#CC3232";
    } else {
        $counterNumber.style.color = "#2F2F2F";
    }
}

$buttonIncrease.addEventListener("click", () => {
    let previousCounterNumber = $counterNumber.innerText;
    $counterNumber.innerText = parseInt(previousCounterNumber) + 1;
    checkNumber();
});

$buttonReset.addEventListener("click", () => {
    $counterNumber.innerText = 0;
    checkNumber();
});

$buttonDecrease.addEventListener("click", () => {
    let previousCounterNumber = $counterNumber.innerText;
    $counterNumber.innerText = parseInt(previousCounterNumber) - 1;
    checkNumber();
});