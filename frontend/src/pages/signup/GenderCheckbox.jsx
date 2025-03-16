import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex '>
        <div className='form-control '>
          <label className={`label gap-2 cursor-pointer p-1`}>
            <span className='label-text'>Male</span>
            <input type='checkbox' className='checkbox border-gray-800 mt-2'/>
          </label>
          </div>
        <div className='formcontrol'>
        <label className={`label gap-2 cursor-pointer p-1`}>
            <span className='label-text'>Female</span>
            <input type='checkbox' className='checkbox border-gray-800 mt-2'/>
          </label>
        </div>
        
        
    </div>
  )
}

export default GenderCheckbox