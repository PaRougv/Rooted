import axios from "axios";

// Test adding a family member
const testAddMember = async () => {
    try {
        // First login to get cookie
        const loginRes = await axios.post("http://localhost:3000/api/auth/login", {
            email: "test@example.com",
            password: "password123"
        }, { withCredentials: true });
        console.log("Login:", loginRes.data);
        
        // Then add family member
        const addRes = await axios.post("http://localhost:3000/api/input/takeuser", {
            name: "Test Member",
            weight: 70,
            height: 170,
            bloodpressure: "120/80",
            heartrate: 72,
            anyothercondition: "None"
        }, { withCredentials: true });
        console.log("Add member:", addRes.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

testAddMember();
