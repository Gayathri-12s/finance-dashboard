import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Filters = () => {
  const { state, dispatch } = useContext(FinanceContext);

  return (
    <div className="card p-3">
      <div className="row g-2">

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search (Food, Income...)"
            value={state.search}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH", payload: e.target.value })
            }
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={state.filter}
            onChange={(e) =>
              dispatch({ type: "SET_FILTER", payload: e.target.value })
            }
          >
            <option value="ALL">All</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={state.sort}
            onChange={(e) =>
              dispatch({ type: "SET_SORT", payload: e.target.value })
            }
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Filters;