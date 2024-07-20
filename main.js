document.addEventListener('DOMContentLoaded', () => {
    // Verifica si estamos en la página de contacto
    const contactContainer = document.getElementById('contact-container');
    
    if (contactContainer) {
        // Crea la sección de contacto
        contactContainer.innerHTML = `
            <section class="contact-content">
                <h2>Información de Contacto</h2>
                <p>Si deseas ponerte en contacto conmigo, puedes usar los siguientes métodos:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:ayoub.elimrany@gmail.com?subject=Consulta&body=Hola, me gustaría contactar contigo...">ayoub.elimrany@gmail.com</a></li>
                    <li><strong>Teléfono:</strong> +34 673 386 315</li>
                    <li><strong>Instagram:</strong> <a href="https://instagram.com/yourusername" target="_blank">@ayelim</a></li>
                    <li><strong>Github:</strong> <a href="https://github.com/AyoubElimeany?tab=repositories">Github</a></li>
                </ul>
            </section>
        `;
    }
});

