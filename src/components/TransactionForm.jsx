import { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionForm = () => {
  const { state, dispatch } = useContext(FinanceContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "Expense",
  });

  useEffect(() => {
    if (state.editItem) setForm(state.editItem);
  }, [state.editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.date) return;

    if (state.editItem) {
      dispatch({ type: "UPDATE", payload: form });
    } else {
      dispatch({
        type: "ADD",
        payload: { ...form, id: Date.now(), amount: +form.amount },
      });
    }

    setForm({ date: "", amount: "", category: "", type: "Expense" });
  };

  return (
    <form className="card p-3 mt-3" onSubmit={handleSubmit}>
      <h6>{state.editItem ? "✏️ Edit Transaction" : "➕ Add Transaction"}</h6>

      <input className="form-control mb-2" type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input className="form-control mb-2"
        placeholder="Amount (₹)"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input className="form-control mb-2"
        placeholder="Category (Food, Travel...)"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select className="form-select mb-2"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Expense</option>
        <option>Income</option>
      </select>

      <div className="d-flex gap-2">
        <button className="btn btn-primary">
          {state.editItem ? "Update" : "Add"}
        </button>

        {state.editItem && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch({ type: "CANCEL_EDIT" })}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TransactionForm;