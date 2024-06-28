function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  // eslint-disable-next-line no-unused-expressions
  budget(`income-${getCurrentYear()}, gdp-${getCurrentYear()}, capita-${getCurrentYear()}`);

  return budget;
}