function sendMail(contactForm) {
    emailjs.send("service_k94h3kx","QVDestinations", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "travel_enquiries": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}