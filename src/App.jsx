import { useState, useContext } from "react";
import { FinanceProvider, FinanceContext } from "./context/FinanceContext";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";

function AppWrapper() {
  const { state } = useContext(FinanceContext);
  const [page, setPage] = useState("dashboard");

  return (
    <div className={state.darkMode ? "dark" : ""}>
      {page === "dashboard" ? (
        <Dashboard goToInsights={() => setPage("insights")} />
      ) : (
        <Insights goBack={() => setPage("dashboard")} />
      )}
    </div>
  );
}

function App() {
  return (
    <FinanceProvider>
      <AppWrapper />
    </FinanceProvider>
  );
}

export default App;