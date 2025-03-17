import { useState } from 'react'
import toast from 'react-hot-toast'


const useSignup = () => {
  const [loading,setLoading]=useState(false);

  const signup = async({fullName,username,password,confirmPassword,gender}) => {
     const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
     if(!success) return;

    setLoading(true);
     try {
      const res = await fetch("/api/auth/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({fullName,username,password,confirmPassword,gender})
      });
      if (!res.ok) {
        // If not, log the error and handle accordingly
        const errorData = await res.text();  // Get the response as text (e.g., error message from server)
        console.error("Error response:", errorData);
        toast.error(`Error: ${errorData}`); // Show error to user
        return;
      }

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      console.log(data)
      toast.success("Signup Successful")
     } catch (error) {
        toast.error(error.message)
     }finally{
      setLoading(false);
     }

  };
  return{loading,signup}
}

export default useSignup


function handleInputErrors({fullName,username,password,confirmPassword,gender}){
  if(!fullName || !username || !password || !confirmPassword || !gender){
  toast.error("please fill in all the fields")
  return false;
  }

  if(password !== confirmPassword){
    toast.error("password didn't match");
    return false
  }

  if(password.length<8){
    toast.error("password must be 8 characters long")
    return false
  }

  return true
}