// Inicializar EmailJS
(function(){
    emailjs.init('kaOuDKa5_huI3KtN1');
})();

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Email:', document.getElementById('email').value);
    console.log('Subject:', document.getElementById('subject').value);
    console.log('Message:', document.getElementById('message').value);
    emailjs.sendForm('service_m9r1hl3', 'template_n00i389', this)
        .then(function() {
            alert('Correo enviado exitosamente!');
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});