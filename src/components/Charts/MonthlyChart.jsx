import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyChart = ({ data }) => (
  <div className="card shadow-sm p-3 h-100">
    <h6 className="mb-3">📈 Monthly Balance</h6>

    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip   contentStyle={{ backgroundColor: "#1e1e1e", border: "none" }}
  labelStyle={{ color: "#fff" }}
  itemStyle={{ color: "#fff" }}/>
        <Line dataKey="amount" stroke="#0d6efd" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyChart;