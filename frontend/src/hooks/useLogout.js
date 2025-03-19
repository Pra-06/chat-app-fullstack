import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"; // ✅ Import AuthContext
import { toast } from "react-hot-toast"; // ✅ Import toast for notifications

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // ✅ Ensure useAuthContext is used correctly

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/logout", {  // ✅ Use full backend URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // ✅ Ensure cookies are sent in requests
            });

            // ✅ Check if response is OK
            if (!res.ok) {
                throw new Error(`Server error: ${res.status} ${res.statusText}`);
            }

            // ✅ Check if response contains valid JSON
            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await res.text();
                throw new Error(`Invalid JSON response from server: ${text}`);
            }

            const data = await res.json();
            console.log("✅ Logout response:", data);

            if (data.error) {
                throw new Error("Logout failed");
            }

            // ✅ Clear user session
            localStorage.removeItem("chat-user");
            setAuthUser(null);

            toast.success("Logged out successfully"); // ✅ Show success message
        } catch (error) {
            console.error("❌ Logout Error:", error);
            toast.error(error.message || "Something went wrong"); // ✅ Handle errors properly
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading }; // ✅ Return `logout` function and `loading` state
};

export default useLogout;

