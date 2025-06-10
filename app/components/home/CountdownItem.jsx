const CountdownItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-5xl font-mono font-bold text-green-400">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
export default CountdownItem;