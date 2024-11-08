// লাইভ গ্রাহক সংখ্যা আপডেট করা
function updateCustomerCount() {
    const customerCountElement = document.getElementById("liveCustomerCount");
    // Firebase থেকে লাইভ গ্রাহক সংখ্যা লোড করার কোড
    // এখানে Firebase Firestore কোড ব্যবহার করুন।
    customerCountElement.textContent = "৫০"; // উদাহরণস্বরূপ, ৫০ গ্রাহক
}

// লগ ইন পেজে রিডিরেক্ট করা
function redirectToLogin() {
    window.location.href = "login.html";
}

// বর্তমান তারিখ ও সময় আপডেট করা
function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    const now = new Date();
    const options = { timeZone: 'Asia/Dhaka', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const bangladeshTime = new Intl.DateTimeFormat('bn-BD', options).format(now);
    dateTimeElement.textContent = bangladeshTime;
}

// পেজ লোড হলে ফাংশনগুলো কল করা
document.addEventListener("DOMContentLoaded", () => {
    updateCustomerCount();
    updateDateTime();
    setInterval(updateDateTime, 1000); // প্রতি সেকেন্ডে সময় আপডেট
});
