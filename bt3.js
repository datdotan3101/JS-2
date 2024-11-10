function calculateTaxableIncome(totalIncome, dependents) {
  return totalIncome - 4 - dependents * 1.6;
}
function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
function calculateTaxForRange(income, rate, rangeLimit) {
  const applicableIncome = Math.min(income, rangeLimit);
  return applicableIncome * rate;
}
function calculateTotalTax(taxableIncome) {
  let remainingIncome = taxableIncome;
  let tax = 0;

  if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.05, 60);
    remainingIncome -= 60;
  } else if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.1, 60);
    remainingIncome -= 60;
  } else if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.15, 90);
    remainingIncome -= 90;
  } else if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.2, 174);
    remainingIncome -= 174;
  } else if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.25, 240);
    remainingIncome -= 240;
  } else if (remainingIncome > 0) {
    tax += calculateTaxForRange(remainingIncome, 0.3, 336);
    remainingIncome -= 336;
  } else if (remainingIncome > 0) {
    tax += remainingIncome * 0.35;
  }

  return tax;
}
function displayTaxResult() {
  const name = document.getElementById("name").value;
  const totalIncome = parseFloat(document.getElementById("totalIncome").value);
  const dependents = parseInt(document.getElementById("dependents").value);

  const taxableIncome = calculateTaxableIncome(totalIncome, dependents);

  if (taxableIncome <= 0) {
    document.getElementById("resultTax").innerText =
      "Thu nhập chịu thuế không hợp lệ.";
    return;
  }

  const taxAmount = calculateTotalTax(taxableIncome);
  document.getElementById(
    "resultTax"
  ).innerText = `Khách hàng ${name} phải nộp thuế: ${formatCurrency(
    taxAmount
  )}`;
}
