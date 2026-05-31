import { db, collection, addDoc } from "./firebase.js";

// This listens for the click directly inside the module scope
document.getElementById("submitBtn").addEventListener("click", async () => {
    
    let fullname = document.getElementById("fullname").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let instagram = document.getElementById("instagram").value;
    let userpassword = document.getElementById("userpassword").value;

    // Validation check
    if (
        fullname.trim() === "" ||
        mobile.trim() === "" ||
        email.trim() === "" ||
        instagram.trim() === "" ||
        userpassword.trim() === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    try {
        // Sending data to Firestore
        await addDoc(collection(db, "submissions"), {
            fullname: fullname,
            mobile: mobile,
            email: email,
            instagram: instagram,
            userpassword: userpassword,
            submittedAt: new Date()
        });

        alert("Details Submitted Successfully!");
        window.location.href = "thankyou.html";

    } catch (error) {
        alert("Firebase Error: " + error.message);
        console.error(error);
    }
});