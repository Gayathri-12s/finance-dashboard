
// initial global state 

export const initialState = {
  transactions: [],
  role: "Viewer",
  filter: "ALL",
  search: "",
  sort: "date",
  darkMode: false,
  loading: true,
  editItem: null,
};


//reducer handles all state updates 
export const financeReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, transactions: action.payload, loading: false };

    case "ADD":
      // Add new transaction 
      return { ...state, transactions: [...state.transactions, action.payload] };

    case "DELETE":

    // Delete transaction by filtering out the one with matching id
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };

    case "START_EDIT":
      //store transaction to be edited 
      return { ...state, editItem: action.payload };

    case "UPDATE":
      // Update transaction 
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
        editItem: null,
      };

    case "CANCEL_EDIT":
      return { ...state, editItem: null };

    case "SET_ROLE":
      return { ...state, role: action.payload };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "SET_SORT":
      return { ...state, sort: action.payload };

    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};