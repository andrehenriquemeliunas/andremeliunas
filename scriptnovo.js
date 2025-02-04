document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');

    // Alterando ícone e texto do botão
    if (document.body.classList.contains('light-theme')) {
        this.innerHTML = "🌞";
    } else {
        this.innerHTML = "🌙";
    }
});

const text = "Olá, sou André Meliunas";
        const typingElement = document.getElementById("typing");
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Ajuste a velocidade aqui
            } else {
                setTimeout(() => {
                    typingElement.textContent = "";
                    index = 0;
                    typeEffect(); // Reinicia o efeito
                }, 2000);
            }
        }
        
        typeEffect();

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
