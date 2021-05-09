export function MetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  return (
    <div className="MetricSelector">
      { label ? (<span className="bold">{label}: </span>) : null }
      <span>
        <select
          defaultValue={defaultValue}
          onChange={(e) => {
            const value = e.target.value;
            if (onChange) {
              onChange(value);
            }
          }}
        >
        {Object.keys(supportedMetrics).map((k, i) => (
          <option key={i} value={k}>{supportedMetrics[k].name}</option>
        ))}
        </select>
      </span>
    </div>
  )
};