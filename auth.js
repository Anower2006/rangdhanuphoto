// Firebase Authentication কোড ব্যবহার করে লগইন ও সাইন আপ করা

function signUp() {
    // Firebase সাইন আপ ফাংশন
    const email = document.querySelector("#loginForm input[type='email']").value;
    const password = document.querySelector("#loginForm input[type='password']").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("সাইন আপ সফল হয়েছে!");
        })
        .catch((error) => {
            console.error("সাইন আপে সমস্যা:", error.message);
        });
}

// লগইন ফাংশন
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.querySelector("#loginForm input[type='email']").value;
    const password = document.querySelector("#loginForm input[type='password']").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("লগইন সফল হয়েছে!");
            window.location.href = "booking.html"; // লগইনের পর বুকিং পেজে যাওয়া
        })
        .catch((error) => {
            console.error("লগইনে সমস্যা:", error.message);
        });
});
