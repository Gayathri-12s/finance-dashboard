import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionTable = ({ showModal }) => {
  const { state, dispatch } = useContext(FinanceContext);

  //  Loading state (mock API simulation)
  if (state.loading)
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary"></div>
        <p>Loading data...</p>
      </div>
    );

  let data = [...state.transactions];

  // FILTER (Income / Expense)
  if (state.filter !== "ALL") {
    data = data.filter((t) => t.type === state.filter);
  }


  data = data.filter((t) =>
    t.category.toLowerCase().includes(state.search.toLowerCase())
  );

  //  SORTING
  if (state.sort === "date") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date)); 
  }

  if (state.sort === "amount") {
    data.sort((a, b) => Number(b.amount) - Number(a.amount)); 
  }

  
  if (data.length === 0)
    return (
      <p className="text-center mt-3">
        No matching transactions 🔍
      </p>
    );

  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Type</th>
          {state.role === "Admin" && <th>Actions</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>

            <td>{t.category}</td>

            <td
              className={
                t.type === "Income" ? "text-success" : "text-danger"
              }
            >
              ₹ {t.amount}
            </td>

            <td>{t.type}</td>

            {state.role === "Admin" && (
              <td>
               
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    dispatch({ type: "START_EDIT", payload: t })
                  }
                >
                  Edit
                </button>

             
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    showModal("Delete this transaction?", () =>
                      dispatch({ type: "DELETE", payload: t.id })
                    )
                  }
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;