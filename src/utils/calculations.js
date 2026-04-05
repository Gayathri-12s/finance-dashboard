//cacalculate total income, expense and balance


export const summary = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    const amount = Number(t.amount); // convert string to number 
    if (t.type === "Income") income += amount;
    else expense += amount;
  });

  return {
    income,
    expense,
    balance: income - expense,
  };
};

// find highest spending category
export const topCategory = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "Expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  if (Object.keys(map).length === 0) return "No data";

  return Object.keys(map).reduce((a, b) =>
    map[a] > map[b] ? a : b
  );
};

// compare last 2 months transcations
// compare spending between last 2 months
export const monthlyComparison = (transactions) => {
  if (transactions.length === 0) return "No data";

  const monthMap = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthMap[month]) {
      monthMap[month] = { income: 0, expense: 0 };
    }

    const amount = Number(t.amount);

    if (t.type === "Income") {
      monthMap[month].income += amount;
    } else {
      monthMap[month].expense += amount;
    }
  });

  const months = Object.keys(monthMap).sort();

  if (months.length < 2) return "Not enough data";

  const lastMonth = monthMap[months[months.length - 1]];
  const prevMonth = monthMap[months[months.length - 2]];

  if (lastMonth.expense > prevMonth.expense)
    return "Spending increased 📈";

  if (lastMonth.expense < prevMonth.expense)
    return "Spending decreased 📉";

  return "No change";
};

// provide financial insights based on transactions

export const financialInsight = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    const amount = Number(t.amount);

    if (t.type === "Income") income += amount;
    else expense += amount;
  });

  const balance = income - expense;

  if (transactions.length === 0) return "No data available";

  if (balance < 0) {
    return "You are spending more than you earn ⚠️";
  }

  return "Your finances are balanced ✅";
};