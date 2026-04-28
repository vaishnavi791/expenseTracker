import { useState } from "react";
import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!form.title || !form.amount) return;

    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ title: "", amount: "", category: "" });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((acc, e) => acc + Number(e.amount), 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      {/* FORM */}
      <div className="card form">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <button onClick={addExpense}>Add</button>
      </div>

      {/* TOTAL */}
      <div className="total">Total: ₹{total}</div>

      {/* LIST */}
      <div className="list">
        {expenses.map((e) => (
          <div key={e.id} className="card item">
            <div className="info">
              <h3>{e.title}</h3>
              <p>₹{e.amount}</p>
              <span>{e.category}</span>
            </div>

            <button
              className="delete"
              onClick={() => deleteExpense(e.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}