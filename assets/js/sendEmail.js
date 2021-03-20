function sendMail(contactForm) {
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_query": contactForm.text.value
    })
        .then( // https://stackoverflow.com/questions/58789965/confirmation-message-not-displaying-on-javascript-contact-form code to alert user if message has been sent successfully.
            function (response) {
                if (response.status == 200 && response.text == 'OK')
                    alert('Your message was sent successfully!');
                else
                    alert('Oops, there was a problem sending your message. Please try again!');
            }, function () {
                alert('Sorry there was a problem. Please try again!');
                document.getElementsByID('myForm').reset(); // this line still not working, try again later
            });
    return false;
}
