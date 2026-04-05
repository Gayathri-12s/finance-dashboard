
// prepare monthly balance data for line chart
export const monthlyData = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // extract YYYY-MM
    const amount = Number(t.amount);

    if (!map[month]) map[month] = 0;
// Add income, subtract expense to get net balance for the month
    map[month] += t.type === "Income" ? amount : -amount;
  });
// sort months chronologically and convert to array format for charting
  return Object.keys(map)
    .sort()
    .map((month) => ({
      month,
      amount: map[month],
    }));
};

// prepare category-wise expense data for pie chart
export const categoryData = (transactions) => {
  const map = {};

  transactions
    .filter((t) => t.type === "Expense")
    .forEach((t) => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });

  return Object.keys(map).map((c) => ({
    name: c,
    value: map[c],
  }));
};