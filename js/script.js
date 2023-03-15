// get value from input field
function getValueFromInput(input) {
  const inputField = document.getElementById(input);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

// add total expenses in a month
/* function totalExpensesPerMonth(food, health, rent, cloth) {
  const foodInputValue = getValueFromInput(food);
  const healthInputValue = getValueFromInput(health);
  const rentInputValue = getValueFromInput(rent);
  const clothInputValue = getValueFromInput(cloth);
  // add all of the above
  const newInputTotal =
    foodInputValue + healthInputValue + rentInputValue + clothInputValue;
  return newInputTotal;
} */

// get previous value
function getPreviousValue(elementId) {
  const element = document.getElementById(elementId);
  const previousValueString = element.innerText;
  const previousValue = parseFloat(previousValueString);
  return previousValue;
}

// set new value
function setInputValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// set event handler to the total cost button
document
  .getElementById("total-cost-button")
  .addEventListener("click", function () {
    const foodInputValue = getValueFromInput("food");
    const healthInputValue = getValueFromInput("health");
    const rentInputValue = getValueFromInput("rent");
    const clothInputValue = getValueFromInput("cloth");
    // add all of the above
    const newInputTotal =
      foodInputValue + healthInputValue + rentInputValue + clothInputValue;

    // previous value
    const previousValue = getPreviousValue("total-cost");
    // current total expenses
    const currentTotalExpenses = (previousValue + newInputTotal).toFixed(2);
    // set total expenses
    setInputValue("total-cost", currentTotalExpenses);
  });

//   set event handler to the rest balance button
document
  .getElementById("rest-balance-button")
  .addEventListener("click", function () {
    // monthly income
    const incomeValue = getValueFromInput("income");

    // total expenses
    const totalCost = getPreviousValue("total-cost");

    // rest balance after expenses
    const restBalance = (incomeValue - totalCost).toFixed(2);

    // set the value
    setInputValue("rest-balance", restBalance);
  });

//   set event handler to the savings button
document
  .getElementById("total-save-button")
  .addEventListener("click", function () {
    // get percentage of savings
    const percentage = getValueFromInput("saving");
    // get rest balance
    const restBalance = getPreviousValue("rest-balance");
    // calculate percentage of rest balance
    const percentageOfRestBalance = ((restBalance / 100) * percentage).toFixed(
      2
    );
    // set the percentage value
    setInputValue("total-save", percentageOfRestBalance);
  });

//   calculate current balance
document
  .getElementById("current-balance-button")
  .addEventListener("click", function () {
    // get rest balance
    const restBalance = getPreviousValue("rest-balance");
    // get percentage of savings
    const savingValue = getPreviousValue("total-save");
    // current balance
    const currentBalance = (restBalance - savingValue).toFixed(2);
    // set current balance
    setInputValue("current-balance", currentBalance);
  });
