
function validateForm(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return false;  
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;  
    }

  
    alert("Formulario enviado correctamente.");
    event.preventDefault(); 
ment.getElementById("contact-form").submit(); // Descomenta esta línea si deseas enviar el formulario manualmente
    return true;
}
