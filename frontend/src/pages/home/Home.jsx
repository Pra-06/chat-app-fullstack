import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Sidebar/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[650px] md:h-[800px] rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home