document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.neon-text');
    const phrase = text.innerHTML;

    function typeWriter() {
        text.innerHTML = '';
        let i = 0;
        const typeWriterInterval = setInterval(function() {
            if (i < phrase.length) {
                text.innerHTML += phrase.charAt(i);
                i++;
            } else {
                clearInterval(typeWriterInterval);
                setTimeout(typeWriter, 2000); // Espera 2 segundos antes de iniciar de nuevo
            }
        }, 150);
    }

    typeWriter();
});
