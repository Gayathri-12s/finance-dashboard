import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0d6efd", "#198754", "#dc3545", "#ffc107"];

const CategoryChart = ({ data }) => (
  <div className="card shadow-sm p-3 h-100">
    <h6 className="mb-3">🥧 Spending Categories</h6>

    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 20, right: 40, left: 40, bottom: 20 }}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          labelLine={false} // cleaner
        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "#1e1e1e",
            border: "none",
          }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default CategoryChart;