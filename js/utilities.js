// get value
const getValue = (id, isInputField) => {
  if (isInputField) {
    const element = document.getElementById(id);
    let value = parseFloat(element.value);
    return value;
  } else {
    const element = document.getElementById(id);
    let value = parseFloat(element.innerText);
    return value;
  }
};
// set value
const setValue = (id, value) => {
  const element = document.getElementById(id);
  element.innerText = value;
};

// validate input
const validateInput = (id) => {
  const inputField = document.getElementById(id);
  if (inputField.value == "" || inputField.value < 0) {
    return false;
  } else {
    return true;
  }
};

// calculate
const calculate = (balanceID, inputID, totalBalanceID, isADD) => {
  const previousBalance = getValue(balanceID, false);
  const newInput = getValue(inputID, true);
  const PreviousTotalBalance = getValue(totalBalanceID, false);

  if (isADD) {
    let newBalance = previousBalance + newInput;
    let newTotalBalance = PreviousTotalBalance + newInput;
    setValue(balanceID, newBalance);
    setValue(totalBalanceID, newTotalBalance);
  } else {
    if (PreviousTotalBalance < newInput) {
      alert("You can't withdraw more than your balance");
    } else {
      let newBalance = previousBalance + newInput;
      let newTotalBalance = PreviousTotalBalance - newInput;
      setValue(balanceID, newBalance);
      setValue(totalBalanceID, newTotalBalance);
    }
  }
};
