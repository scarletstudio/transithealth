import { useEffect, useState } from 'react'

function Modal(props){
  const { supportedMetrics, onClose, selectMetric, show } = props;
  if(!show){
    return null;
  }
  
  return (
    <div className="SelectorModal" onClick={onClose} >
        <div className="modal-content" onClick={e => e.stopPropagation() } >
          <div className="modal-header" >
            <h4 className="modal-title">Select your Metric</h4>
          </div>
          <div className="modal-body" >
            <span>
              {Object.keys(supportedMetrics).map((k, i) => (
                <p 
                key={i} 
                onClick={ () => {
                  selectMetric(k)
                  onClose()  
                } }
                >{supportedMetrics[k].name}</p>
              ))}
            </span>
          </div>
          <div className="modal-footer" >
            <button className="closeButton" onClick={onClose} >Close</button>
          </div>
        </div>
      </div>
    )
}

export default function SearchableMetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  const [show, setShow] = useState(0)
  const [selectedMetric, setSelectedMetric] = useState(defaultValue)
  
  return (
    <div className="SearchableMetricSelector">
    
      <div className="SelectorBody"> 
        { label ? (<span className="bold selectorLabel">{label}: </span>) : null }
        <button className="selectorButton" onClick={() => setShow(1)}>{supportedMetrics[selectedMetric].name}</button>
      </div>
      
      <Modal 
        supportedMetrics={supportedMetrics} 
        onClose={() => setShow(0)}
        selectMetric={(metricID) => {
          onChange(metricID)
          setSelectedMetric(metricID)
          }
        } 
        show={show} />
      
    </div>
  )
};