function sendMail (contactForm) {
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.messagequery.value
    })
    .then(
        function(response) {
            console.log("Message sent!", response);
        },
        function(error) {
            console.log("Failed to send message!", error);
        });
}
