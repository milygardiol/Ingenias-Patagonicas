function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensaje').value;

    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML += `<p><strong>Nombre:</strong> ${name}</p>`;
    consoleDiv.innerHTML += `<p><strong>Correo Electrónico:</strong> ${email}</p>`;
    consoleDiv.innerHTML += `<p><strong>Mensaje:</strong> ${message}</p>`;
    consoleDiv.innerHTML += '<hr>';

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
}