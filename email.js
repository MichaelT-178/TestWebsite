const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ngfg5ko';

   emailjs.sendForm(serviceID, templateID, this) 
    .then(() => {
        alert('Email sent successfully!');
        btn.value = 'Send Email';
    }, (err) => {
        alert('Email not sent! Error occurred.');
        btn.value = 'Send Email';
        console.log(err)
    });
});