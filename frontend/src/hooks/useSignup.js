import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		// ✅ Validate inputs before sending request
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("http://localhost:5000/api/auth/signup", {  // ✅ Use full backend URL
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});

			// ✅ Log response status and text before JSON parsing
			console.log("🔍 Response Status:", res.status, res.statusText);

			const textResponse = await res.text();
			console.log("🔍 Raw API Response:", textResponse);

			// ✅ Check if response is empty
			if (!textResponse.trim()) {
				throw new Error("Empty response from server. Backend may have crashed or CORS issue.");
			}

			const data = JSON.parse(textResponse); // ✅ Convert text to JSON
			if (data.error) {
				throw new Error(data.error);
			}

			// ✅ Save user to local storage and update context
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			toast.success("Signup Successful");
		} catch (error) {
			toast.error(error.message);
			console.error("❌ Signup Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

// ✅ Input validation before making API call
function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
