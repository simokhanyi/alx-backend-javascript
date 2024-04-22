import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(incomeAmount, gdpAmount, capitaAmount) {
  const budget = getBudgetObject(incomeAmount, gdpAmount, capitaAmount);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${incomeAmount}`;
    },
    getIncomeInEuros() {
      return `${incomeAmount} euros`;
    },
  };

  return fullBudget;
}
