(function () {
    emailjs.init("Otqe1TJvRfMnxB2Xq");
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Collect form data
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("comment").value
    };


    // Send email using EmailJS
    emailjs.send("service_9rz18ib", "template_kimkxxr", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.querySelector(".output_message").innerText = "Message sent successfully!";
            document.querySelector(".output_message").style.color = "green";
            document.getElementById("contactForm").reset(); // Reset form
        }, function(error) {
            console.log("FAILED...", error);
            document.querySelector(".output_message").innerText = "Message failed to send!";
            document.querySelector(".output_message").style.color = "red";
        });
});