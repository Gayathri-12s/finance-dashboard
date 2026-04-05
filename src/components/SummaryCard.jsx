const SummaryCard = ({ title, value, color }) => (
  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      <h6>{title}</h6>
      <h4 className={color}>₹ {value}</h4>
    </div>
  </div>
);

export default SummaryCard;