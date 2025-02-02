document.getElementById('theme-toggle').addEventListener('click', function() {
    // Alterna a classe light-theme no body
    document.body.classList.toggle('light-theme');
    
    // Altera o texto do botão com base no tema
    if (document.body.classList.contains('light-theme')) {
        this.textContent = 'Tema Claro';
    } else {
        this.textContent = 'Tema Escuro';
    }
});