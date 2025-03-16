/* import React from 'react'

const SearchInput = () => {
  return (
    <form className="flex-item center gap-2 ">
      
        <input type='text' placeholder='Search....' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white inline-block mr-2'>Icon</button>
    </form>
  )
}

export default SearchInput */


/* import React from 'react'
import { IoSearchSharp } from "react-icons/io5"; 

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <div className="flex items-center mt-2">
        <input
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-full p-2 "
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white inline-block ml-2 mr-2  hover:text-gray-100"
        >
         <IoSearchSharp className='w-6 h-6 outline-none ml-2'/>
        </button>
      </div>
    </form>
  )
}

export default SearchInput;
 */
import React from 'react'
import { IoSearchSharp } from "react-icons/io5"; 

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 w-full sm:w-auto">
      <div className="flex items-center mt-2 w-full">
        <input
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-full p-2 w-full sm:w-80"
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white inline-block ml-2 p-2 hover:bg-sky-600 hover:text-gray-100 transition-all duration-300"
        >
          <IoSearchSharp className="w-6 h-6" />
        </button>
      </div>
    </form>
  )
}

export default SearchInput;
