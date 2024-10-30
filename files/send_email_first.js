
// Collect form data
let formData_1 = {
    from_name: "YOUR PORTFOLIO",
    from_email: "",
    message: "Someone visited your portfolio!"
};

send_message();

document.getElementById("linkedin").addEventListener("click", function(event) {

    // Collect form data
    formData_1 = {
        from_name: "YOUR PORTFOLIO",
        from_email: "",
        message: "Someone visited your LINKEDIN!"
    };
    
    send_message(event);
    
});

document.getElementById("github").addEventListener("click", function(event) {
    // event.preventDefault(); // Prevent form from submitting the default way

    // Collect form data
    formData_1 = {
        from_name: "YOUR PORTFOLIO",
        from_email: "",
        message: "Someone visited your GITHUB!"
    };
    
    send_message(event);
    
});

async function  send_message(event){
    emailjs.send("service_9rz18ib", "template_kimkxxr", formData_1)
    .then(function(response) {
    }, function(error) {
    });

}