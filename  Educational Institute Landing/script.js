document.getElementById("enquireBtn").addEventListener("click", function () {

    alert("Thank you for your interest! Redirecting to Contact Section.");

    document.getElementById("contactSection").scrollIntoView({
        behavior: "smooth"
    });

    this.innerText = "Enquiry Sent ✓";
});