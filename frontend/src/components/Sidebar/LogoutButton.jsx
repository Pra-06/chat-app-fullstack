/* import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const{loading,logout} =useLogout

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
       {!loading ? (
         <BiLogOut className='w-6 h-6 text-white cursor-pointer '
         onClick={logout}
         />
       ) :(
        <span className='loading loading-spinner'></span>
       )
       }
    </div>
  )
}

export default LogoutButton; */
import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout"; // ✅ Import hook properly

const LogoutButton = () => {
  const { loading, logout } = useLogout(); // ✅ Call the hook inside the component

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span> // ✅ Shows loading indicator
      )}
    </div>
  );
};

export default LogoutButton;
