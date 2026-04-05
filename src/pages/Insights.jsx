import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { topCategory, monthlyComparison,financialInsight} from "../utils/calculations";

const Insights = () => {
  const { state } = useContext(FinanceContext);

  return (
    <div className="card p-3 insights-card mt-3 ">
      <h5>Insights</h5>
      <p><strong>Top Category:</strong> {topCategory(state.transactions)}</p>
      <p><strong>Monthly Trend:</strong> {monthlyComparison(state.transactions)}</p>
      <p>{financialInsight(state.transactions)}</p>
    </div>
  );
};

export default Insights;