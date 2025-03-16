import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-380 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            
            <h1 className='text-3xl font-semibold text-center text-gray-500'>
            Signup
                <span className='text-gray-700'>ChatApp</span>
                
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Fullname</span>
                    </label>
                    <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'/> 
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'/> 
                </div>

                <GenderCheckbox/>


                <a href='#' className='text-sm hover:underline hover:text-gray-700 mt-2 inline-block'>
                    Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up
                    </button>
                </div>
            </form>
            </div>  
             </div>
  )
}

export default Signup