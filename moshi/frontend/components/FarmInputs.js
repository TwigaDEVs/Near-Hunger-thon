import React, {useState} from 'react'
import FarmInputsModal from './FarmInputsModal';
function FarmInputs() {
    let [farmInputsOpen, setFarmInputsOpen] = useState(false);
    const handleOpenFarmInputsModal = () => {
        setFarmInputsOpen(true);
    }

    const closeModal = () => {
        setFarmInputsOpen(false);
    }
  return (
    <div>
        <div>
            <div className="w3-center">
                <button className="w3-button w3-green w3-round" onClick={handleOpenFarmInputsModal}>Sell</button>
            </div>
            <div>
                <div> 
                    <div>
                        {farmInputsOpen && <FarmInputsModal onHandleCloseModal={closeModal} />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FarmInputs