const amountOfBill = document.getElementById("billAmount");
const percentageOfBill = document.getElementById("tip-percentage");
const totalBill = document.getElementById("totalBillAmount");
const calculateButton = document.getElementById("mathematics");

function calculationOfBill() {
  const valueOfBill = amountOfBill.value;
  const inputPercentage = percentageOfBill.value;
  const totalCalculation = valueOfBill * (1 + inputPercentage / 100);
  totalBill.innerText = totalCalculation.toFixed(2);
}
calculateButton.addEventListener("click", calculationOfBill);
