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

// Função para abrir o modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal se o usuário clicar fora da área do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
}
