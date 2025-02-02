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

// Função para abrir o modal da experiência profissional
function openExperienceModal() {
    document.getElementById('experience-modal').style.display = 'flex';
}

// Função para fechar o modal da experiência profissional
function closeExperienceModal() {
    document.getElementById('experience-modal').style.display = 'none';
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('experience-modal')) {
        closeExperienceModal();
    }
};

//openAcadModal
// Função para abrir o modal da experiência profissional
function openAcadModal() {
    document.getElementById('experienceAcad-modal').style.display = 'flex';
}

// Função para fechar o modal da experiência profissional
function closeAcadModal() {
    document.getElementById('experienceAcad-modal').style.display = 'none';
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('experienceAcad-modal')) {
        closeAcadModal();
    }
};

// Função para abrir o modal de habilidades
function openSkillsModal() {
    document.getElementById('skills-modal').style.display = 'flex';
}

// Função para fechar o modal de habilidades
function closeSkillsModal() {
    document.getElementById('skills-modal').style.display = 'none';
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('skills-modal')) {
        closeSkillsModal();
    }
};

// Função para abrir o modal de Sobre Mim
function openAboutModal() {
    document.getElementById('about-modal').style.display = 'flex';
}

// Função para fechar o modal de Sobre Mim
function closeAboutModal() {
    document.getElementById('about-modal').style.display = 'none';
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('about-modal')) {
        closeAboutModal();
    }
};

function openChatbotProjects() {
    window.open("project.html", "_blank");
}
