import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onClose,data }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      width: "500px",
      height:"500px",
      maxHeight: "100%",
      overflow: "auto",
      outline: "none"
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={customStyles}
      bodyOpenClassName="modal-open"
      htmlOpenClassName="modal-open"
    >
      {/* N?i dung c?a popup modal */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
          X
        </button>
      </div>
      <div className="row"> <center><img style={{
            height: '150px',
            width: '280px',
          
          }} src='..\anh1.webp'></img></center></div>

        <div className="row"> 
        <div className="col-4">
        <img style={{
            height: '100px',
            width: '150px',
          
          }} src='..\anh2.webp'></img>
        </div>
        <div className="col-4">
        <img style={{
            height: '100px',
            width: '150px',
          
          }} src='..\anh3.webp'></img>
        </div>
        <div className="col-4">
        <img style={{
            height: '100px',
            width: '150px',
          
          }} src='..\anh4.webp'></img>
        </div>

        </div>
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">City Mpg</div> <div style={{textAlign:"right"}} className="col-3">{data.city_mpg}</div></div>
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Class</div> <div style={{textAlign:"right"}} className="col-3">{data.class}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Combination Mpg</div> <div style={{textAlign:"right"}} className="col-3">{data.combination_mpg}</div></div> 
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Cylinders</div> <div style={{textAlign:"right"}} className="col-3">{data.cylinders}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Displacement</div> <div style={{textAlign:"right"}} className="col-3">{data.displacement}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Drive</div> <div style={{textAlign:"right"}} className="col-3">{data.drive}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Fuel Type</div> <div style={{textAlign:"right"}} className="col-3">{data.fuel_type}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Highway Mpg</div> <div style={{textAlign:"right"}} className="col-3">{data.highway_mpg}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Make</div> <div style={{textAlign:"right"}} className="col-3">{data.make}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Model</div> <div style={{textAlign:"right"}} className="col-3">{data.model}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Transmission</div> <div style={{textAlign:"right"}} className="col-3">{data.transmission}</div></div>  
        <div style={{marginTop:'10px'}} className="row"> <div className="col-9">Year</div> <div style={{textAlign:"right"}} className="col-3">{data.year}</div></div>  
     
    </Modal>
  );
};

export default CustomModal;