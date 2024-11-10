function getAreaBonus(area) {
  switch (area.toUpperCase()) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function getTargetBonus(target) {
  switch (target) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    default:
      return 0;
  }
}

function calculateResult() {
  const score1 = parseFloat(document.getElementById("score1").value);
  const score2 = parseFloat(document.getElementById("score2").value);
  const score3 = parseFloat(document.getElementById("score3").value);
  const area = document.getElementById("area").value;
  const target = parseInt(document.getElementById("target").value);
  const threshold = parseFloat(document.getElementById("threshold").value);

  if (score1 === 0 || score2 === 0 || score3 === 0) {
    document.getElementById("resultTuyenSinh").innerText =
      "Thí sinh bị rớt do có môn điểm 0.";
    return;
  }

  const totalScore = score1 + score2 + score3;
  const areaBonus = getAreaBonus(area);
  const targetBonus = getTargetBonus(target);
  const finalScore = totalScore + areaBonus + targetBonus;

  if (finalScore >= threshold) {
    document.getElementById(
      "resultTuyenSinh"
    ).innerText = `Thí sinh đậu. Tổng điểm đạt được: ${finalScore}`;
  } else {
    document.getElementById(
      "resultTuyenSinh"
    ).innerText = `Thí sinh rớt. Tổng điểm đạt được: ${finalScore}`;
  }
}
