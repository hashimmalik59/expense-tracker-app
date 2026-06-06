let userItem = document.getElementById("item");
let userAmount = document.getElementById("amount");
const addButton = document.getElementById("add");
const errorMessage = document.querySelector("span");

const expenses = JSON.parse(localStorage.getItem("myExpenses")) || [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (userItem.value.trim().length > 0 && userAmount.value > 0) {
    errorMessage.classList.add("hide");

    const expenseObj = {
      id: Date.now(),
      item: userItem.value,
      amount: +userAmount.value,
    };

    userItem.value = "";
    userAmount.value = "";

    expenses.push(expenseObj);

    localStorage.setItem("myExpenses", JSON.stringify(expenses));
  } else {
    errorMessage.classList.remove("hide");
  }
});

console.log(expenses);
