import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

import { summary } from "../utils/calculations";
import { monthlyData, categoryData } from "../utils/chartHelpers";
import { exportToJSON } from "../utils/exportJSON";

import SummaryCard from "../components/SummaryCard";
import Filters from "../components/Filters";
import RoleSwitcher from "../components/RoleSwitcher";
import TransactionTable from "../components/TransactionTable";
import TransactionForm from "../components/TransactionForm";
import MonthlyChart from "../components/Charts/MonthlyChart";
import CategoryChart from "../components/Charts/CategoryChart";
import Modal from "../components/Modal";
import Insights from "./Insights";

const Dashboard = () => {
  const { state, dispatch } = useContext(FinanceContext);

  const [modal, setModal] = useState({
    show: false,
    message: "",
    action: null,
  });

  const showModal = (message, action = null) => {
    setModal({ show: true, message, action });
  };

  const closeModal = () => {
    setModal({ show: false, message: "", action: null });
  };

  const s = summary(state.transactions);

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-0">Finance Dashboard</h2>
          <small className="text-muted">
            Track your spending & income
          </small>
        </div>

        <div className="d-flex gap-2">
          <RoleSwitcher />

          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            🌙
          </button>

          <button
            className="btn btn-success"
            onClick={() => exportToJSON(state.transactions)}
          >
            Export
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="row g-3">
        <SummaryCard title="📊 Balance" value={s.balance} />
        <SummaryCard title="💰 Income" value={s.income} color="text-success" />
        <SummaryCard title="💸 Expense" value={s.expense} color="text-danger" />
      </div>

      {/* CHARTS */}
      <div className="row mt-4 g-3">
        <div className="col-md-6">
          <MonthlyChart data={monthlyData(state.transactions)} />
        </div>
        <div className="col-md-6">
          <CategoryChart data={categoryData(state.transactions)} />
        </div>
      </div>

       {/* FORM */}
      {state.role === "Admin" && (
        <div className="mt-4">
          {/* 🔥 PASS showModal HERE */}
          <TransactionForm showModal={showModal} />
        </div>
      )}


      {/* FILTERS */}
      <div className="mt-4">
        <Filters />
      </div>

      {/* INSIGHTS */}
      <div className="mt-4">
        <Insights />
      </div>

      {/* TABLE */}
      <div className="mt-4">
        <h5 className="mb-2">Transactions</h5>

        <p className="text-muted">
          Total Transactions: {state.transactions.length}
        </p>

        <TransactionTable showModal={showModal} />
      </div>

      {/* MODAL */}
      <Modal
        show={modal.show}
        message={modal.message}
        onClose={closeModal}
        onConfirm={() => {
          modal.action && modal.action();
          closeModal();
        }}
      />
    </div>
  );
};

export default Dashboard;