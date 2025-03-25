import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
    
      try {
        // Make the API request and include credentials (cookies)
        const res = await fetch('http://localhost:5000/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Send cookies with the request
        });
    
        if (!res.ok) {
          const errorText = await res.text(); // Log error body for more details
       
          throw new Error(`Error: ${res.status} - ${res.statusText}: ${errorText}`);
        }
    
        // Parse the response as JSON
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error); // Check if the API returns an error in the data
        }
    
        // Set the conversations in state
        setConversations(data);
      } catch (error) {
        toast.error(error.message);  // Show the error toast notification
        console.error("Error fetching conversations:", error);
      } finally {
        setLoading(false); // Stop loading, regardless of success or failure
      }
    };

    // Call the function to fetch conversations
    getConversations(); 

  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return { loading, conversations };
};

export default useGetConversations;
