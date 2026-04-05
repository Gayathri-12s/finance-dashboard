import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { state, dispatch } = useContext(FinanceContext);

  return (
    <select
      className="form-select w-auto"
      value={state.role}
      onChange={(e) =>
        dispatch({ type: "SET_ROLE", payload: e.target.value })
      }
    >
      <option>Viewer</option>
      <option>Admin</option>
    </select>
  );
};

export default RoleSwitcher;