import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex '>
        <div className='form-control '>
          <label className={`label gap-2 cursor-pointer p-1 ${selectedGender === "male" ? "selected" : ""} `}>
            <span className='label-text'>Male</span>
            <input type='checkbox' className='checkbox border-gray-800 mt-2'
            checked={selectedGender==="male"}
            onChange={() => onCheckboxChange("male")}
            />
          </label>
          </div>
        <div className='formcontrol'> 
        <label className={`label gap-2 cursor-pointer p-1 ${selectedGender==='female' ? "selected": "" }`}>
            <span className='label-text'>Female</span>
            <input type='checkbox' className='checkbox border-gray-800 mt-2'
            checked={selectedGender==="female"}
            onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
        
        
    </div>
  )
}

export default GenderCheckbox