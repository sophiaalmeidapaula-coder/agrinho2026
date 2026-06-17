// ================================
// AGRINHO 2026 - SCRIPT JS
// Interatividade do site Agro Sustentável
// ================================


// 1. Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// 2. Validação simples do formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso! 🌱");

    form.reset();
});


// 3. Animação simples ao rolar a página (efeito de surgimento)
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.6s ease";
    observer.observe(section);
});
