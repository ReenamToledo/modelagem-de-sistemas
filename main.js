// === CONFIGURAÇÕES E CONSTANTES ===

const CONFIG = {
    THEME_KEY: "portifolio-theme", 
    //chave para usar e salvar no localStorage a preferência do usuário
    ANIMATION_DURATION: 300, //duração das animações do site (300 milissegundos)
    SCROLL_OFSET: 80 //ajusta o posicionamento da rolagem
}

// === CLASSE PRINCIPAL DO PORTIFOLIO ===
class Portifolio {
    constructor() { //construtor inicializa novos objetos
        this.init();
    }
    init(){
        this.setupEvenListeners(); //registrarOuvintes: reação do código aos cliques e interações do usuário
        this.initThemer(); //inicializa o tema do site (claro ou escuro), lendo preferências salvas
        this.initScrollAnimations(); //Preparar as animações que serão ativadas quando as seções entrarem na área visível
        this.initSmoothScrolling(); // Implementar o efeito de rolagem suave
        this.initContactForm();//Configura a lógica e validação o formulário de contato para enviar feedback
        this.initTypingEffect();//Efeito visual de digitação em destaque no topo  da página
    }
    initTheme() {
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body;
        const themeIcon = document.querySelector('.theme-icon');

        //verificar a preferênca salva no sistema
        const savedTheme = localStorage.getItem(CONFIG.THEME_KEY);
        const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && preferDark)) {
            body.classList.add("dark-mode");
            themeIcon.textContent = "☀️";
        }

        themeToggle.addEventListener("click", () =>{
            body.classList.toggle("dark-mode")
            const isDark = body.classList.contains("dark-mode")

            themeIcon.textContent = isDark ? "☀️": "🌙";
            localStorage.setItem(CONFIG, THEME_KEY, isDark ? "dark": "light");

            //animação do ícone
            themeIcon.computedStyleMap.transform = "scale(0.8)";
            setTimeout(() => { //aguarda 150 ms e depois disso executo o código
                themeIcon.style.transform = "scale(1)"; //restaurei o ícone no tamanho
            }, 150);
        });
    }
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
    }
}
