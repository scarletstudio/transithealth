import { useEffect, useState } from 'react'

function Modal(props){
  const { supportedMetrics } = props;
  if(!props.show){
    return null;
  }
  const modalStyle = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "fixed",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  const modalHeader = {
    padding: "10px"
  }
  const modalBody = {
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    maxHeight: "calc(100vh - 210px)",
    overflowY: "auto"
  }
  const modalContentStyle = {
    width: "500px",
    backgroundColor: "white"
  }
  
  return (
    <div className="SelectorModal" onClick={props.onClose} style={modalStyle} >
        <div className="modal-content" onClick={e => e.stopPropagation() } style={modalContentStyle} >
          <div className="modal-header" style={modalHeader} >
            <h4 className="modal-title">Select your Metric</h4>
          </div>
          <div className="modal-body" style={modalBody} >
            <span>
              {Object.keys(supportedMetrics).map((k, i) => (
                <p key={i} value={k}>{supportedMetrics[k].name}</p>
              ))}
            </span>
          </div>
          <div className="modal-footer" style={modalHeader}>
            <button className="button" onClick={props.onClose} >Close</button>
          </div>
        </div>
      </div>
    )
}

export default function SearchableMetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  const [show, setShow] = useState(0)
  
  return (
    <div className="SearchableMetricSelector">
    
      <div className="SelectorBody"> 
        { label ? (<span className="bold">{label}: </span>) : null }
        <button id="pickBtn" onClick={() => setShow(1)}>Select Metric Here</button>
      </div>
      
      <Modal supportedMetrics={supportedMetrics} onClose={() => setShow(0)} show={show} />
      
    </div>
  )
};