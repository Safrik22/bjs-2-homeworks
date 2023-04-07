"use strict";

// ЗАДАЧА 1
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - (4 * a * c);

  if (discriminant < 0) {
    return []
  }

  if (discriminant === 0) {
    const root = -b / (2 * a)
    return [root]
  }

  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [root1, root2];
};

console.log(solveEquation(1, 5, 4))



//ЗАДАЧА 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const numPercent = parseInt(percent)
  const numContribution = parseInt(contribution)
  const numAmount = parseInt(amount)
  const numCountMonths = parseInt(countMonths)

  if (Number.isNaN(numPercent) || Number.isNaN(numContribution) || Number.isNaN(numAmount) || Number.isNaN(numCountMonths)) {
    return false
  }
  const P = numPercent / 100 / 12;
  const S = numAmount - numContribution;
  const mounthlyPayment = S * (P + (P / (((1 + P) ** numCountMonths) - 1)));
  const totalPayment = mounthlyPayment * 12;
  const result = Math.round(totalPayment * 100) / 100;
  return result;
};

console.log(calculateTotalMortgage('10', 0, '50000', 12))