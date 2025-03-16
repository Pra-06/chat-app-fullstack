import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div>
        <div className="avatar avatar-online">
            <div className="w-6 rounded-full">
                <img src="avatar.png" />
        </div>
    </div>
        {/* div className="avatar avatar-offline">
            <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div> */}
     </div>
    </div>
    <div className='flex flex-col flex-1 '>
      <div className='flex gap-3 justify-between'>
        <p className='font-bold text-gray-200  ml-2 '>
          Pratha Chandrawat
        </p>
        <span className='text-xl'>❤️</span>
      </div>
    </div>
    <div className='divider' my-2 py-2 h-1></div>
    </>
  )
}

export default Conversation