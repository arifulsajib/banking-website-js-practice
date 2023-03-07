// deposit
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", () => {
  const isValidated = validateInput("new-deposit");
  if (isValidated) {
    calculate("total-deposit", "new-deposit", "total-balance", true);
  } else {
    alert("Please Enter valid input");
  }
});
// withdraw
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", () => {
  const isValidated = validateInput("new-withdraw");
  if (isValidated) {
    calculate("total-withdraw", "new-withdraw", "total-balance", false);
  } else {
    alert("Please Enter valid input");
  }
});
