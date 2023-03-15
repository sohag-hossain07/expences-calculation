// error message
function errorMessage(elementId, value) {
  try {
    if (isNaN(value) === true || value < 0)
      throw "Please, give a valid number!";
  } catch (err) {
    setInputValue(elementId, err);
  }
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

    // set value
    setInputValue("total-cost", currentTotalExpenses);

    errorMessage("cost", newInputTotal);
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

    // err throw
    errorMessage("rest", incomeValue);
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

    // error throw
    errorMessage("save", percentage);
    errorMessage("save", percentageOfRestBalance);
    try {
      if (percentageOfRestBalance > restBalance)
        throw "You have not sufficient balance!";
    } catch (err) {
      setInputValue("save", percentageOfRestBalance);
    }
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
