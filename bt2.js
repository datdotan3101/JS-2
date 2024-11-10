function calculateTieredCost(kw, rate, limit) {
  if (kw <= limit) {
    return kw * rate;
  }
  return limit * rate;
}

function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function calculateBill() {
  const name = document.getElementById("name").value;
  let kw = parseFloat(document.getElementById("kw").value);
  let totalCost = 0;

  if (kw <= 0) {
    document.getElementById("resultTienDien").innerText =
      "Số kWh phải lớn hơn 0.";
    return;
  }

  totalCost += calculateTieredCost(kw, 500, 50);
  kw -= Math.min(kw, 50);

  if (kw > 0) {
    totalCost += calculateTieredCost(kw, 650, 50);
    kw -= Math.min(kw, 50);
  }

  if (kw > 0) {
    totalCost += calculateTieredCost(kw, 850, 100);
    kw -= Math.min(kw, 100);
  }

  if (kw > 0) {
    totalCost += calculateTieredCost(kw, 1100, 150);
    kw -= Math.min(kw, 150);
  }

  if (kw > 0) {
    totalCost += kw * 1300;
  }

  document.getElementById(
    "resultTienDien"
  ).innerText = `Khách hàng ${name} phải trả: ${formatCurrency(totalCost)}`;
}
