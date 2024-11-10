function toggleConnectionsField() {
  const customerType = document.getElementById("customerType").value;
  const connectionsField = document.getElementById("connections");
  if (customerType === "residential") {
    connectionsField.disabled = true;
    connectionsField.value = "";
  } else {
    connectionsField.disabled = false;
  }
}
function calculateResidentialBill(premiumChannels) {
  const processingFee = 4.5;
  const basicServiceFee = 20.5;
  const premiumChannelFee = 7.5;

  return processingFee + basicServiceFee + premiumChannels * premiumChannelFee;
}
function calculateBusinessBill(connections, premiumChannels) {
  const processingFee = 15;
  const premiumChannelFee = 50;
  let basicServiceFee = 75;
  if (connections > 10) {
    basicServiceFee += (connections - 10) * 5;
  }

  return processingFee + basicServiceFee + premiumChannels * premiumChannelFee;
}
function formatCurrency(amount) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
function calculateBill() {
  const customerId = document.getElementById("customerId").value;
  const customerType = document.getElementById("customerType").value;
  const connections =
    parseInt(document.getElementById("connections").value) || 0;
  const premiumChannels =
    parseInt(document.getElementById("premiumChannels").value) || 0;

  let totalBill = 0;

  if (customerType === "residential") {
    totalBill = calculateResidentialBill(premiumChannels);
  } else if (customerType === "business") {
    totalBill = calculateBusinessBill(connections, premiumChannels);
  }
  document.getElementById(
    "resultTienCap"
  ).innerText = `Khách hàng ${customerId} phải trả: ${formatCurrency(
    totalBill
  )}`;
}
