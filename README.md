#  Finance Dashboard UI

##  Overview

The **Finance Dashboard UI** is a React-based web application designed to help users track, manage, and analyze their financial transactions in an intuitive and visual way.

This project focuses on:

* Clean and user-friendly UI
* Structured state management
* Data visualization
* Simulating real-world application behavior without a backend

---

##  Objectives

* Build a responsive and interactive finance dashboard
* Implement global state management using Context API + useReducer
* Visualize financial data using charts
* Simulate API behavior (mock API)
* Ensure data persistence across sessions

---

##  Features

---

###  Dashboard Overview

* Displays key financial metrics:

  * Total Balance
  * Total Income
  * Total Expenses

* Visualizations:

  *  Monthly Balance Trend (Line Chart)
  *  Spending Categories (Pie Chart)

---

###  Transactions Management

* View all transactions in a structured table
* Search transactions (category/type)
* Filter by:

  * Income
  * Expense
* Sort by:

  * Date
  * Amount

---

###  Role-Based Access (Frontend Simulation)

* **Viewer**

  * Can only view data

* **Admin**

  * Can:

    * Add transactions
    * Edit transactions
    * Delete transactions

> Role switching is implemented on the frontend for demonstration purposes.

---

###  Insights (Data-Driven Observations)

The application derives meaningful insights from transaction data:

* Highest spending category
* Monthly spending trend (increase/decrease)
* Overall financial health:

  * Overspending warning ⚠️
  * Balanced finances ✅

> These insights help users understand patterns instead of just viewing raw data.

---

##  Additional Features

*  Dark mode toggle
*  Data persistence using localStorage
*  Mock API simulation using setTimeout
*  Export transactions as JSON

---

##  Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Context API + useReducer
* **Styling:** Bootstrap 5 + Custom CSS
* **Charts:** Recharts
* **Storage:** localStorage

---

##  State Management

Global state is managed using **Context API and useReducer**, ensuring predictable state updates.

### State Includes:

* Transactions data
* Filters & search
* Sorting
* User role
* Theme (dark/light)
* Loading state

---

##  Data Handling

* On initial load:

  * Data is fetched from localStorage
  * If empty → fallback to mock data

* All operations:

  * Add
  * Edit
  * Delete

 Automatically update localStorage

✔ Ensures persistence after refresh

---

##  Mock API Simulation

The application simulates API behavior using `setTimeout`.

### Purpose:

* Mimic asynchronous data fetching
* Simulate network delay
* Display loading state

> This approach replicates real-world frontend-backend interaction without requiring a backend.

---

##  Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Main pages (Dashboard, Insights)
├── context/           # Global state management
├── utils/             # Business logic & helpers
├── data/              # Mock data
├── styles/            # Custom CSS
├── App.jsx
├── main.jsx
```

---

##  Setup Instructions

1. Clone the repository

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

---

##  Edge Cases Handled

* No transactions available
* Empty search results
* Invalid or empty localStorage data
* Data persistence across reloads
* Loading state before data is displayed
* Safe fallback to mock data

---

##  Assumptions

* Single-user application
* No backend or database
* Role-based access is simulated
* No authentication system

---

##  Design Decisions

* Kept UI simple and clean for better usability
* Used reusable components for scalability
* Separated business logic into utility functions
* Avoided overengineering to maintain readability
* Focused on real-world behavior simulation

---

##  Key Learnings

* Managing global state using Context API
* Handling data persistence with localStorage
* Designing responsive UI using Bootstrap
* Implementing data visualization with charts
* Simulating API behavior in frontend-only apps

---

##  Conclusion

This project demonstrates a complete frontend application workflow including:

* Data management
* UI/UX design
* State handling
* Data visualization
* Mock API simulation

It reflects a practical and structured approach to building modern web applications.

---

## 🔗 (Optional)

* Live Demo: https://finance-dashboard-coral-one.vercel.app
* GitHub Repo: https://github.com/Gayathri-12s/finance-dashboard.git
