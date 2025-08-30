let calculator = localStorage.getItem("calculator") || "";

    displayResult();

    function updateCalculator(value) {
      calculator += value;

      localStorage.setItem("calculator", calculator);

      displayResult();
    }

    //optional use
    /* function saveCalculation() {
      localStorage.setItem("calculator", calculator);
    } */

    function displayResult() {
      document.querySelector(".js-result").innerHTML = calculator;
    }