// get value from input field
function getValueFromInput(input) {
  const inputField = document.getElementById(input);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

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
