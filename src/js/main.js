// Dados dos programas
const programsData = [
    {
        id: 1,
        title: "Jogo da velha",
        lang: "java",
        icon: "fab fa-java",
        description: "Um clássico Jogo da Velha implementado em Java com interface gráfica usando Swing, oferecendo dois modos de jogo: contra outro jogador ou contra a máquina.",
        version: "1.0.0",
        date: "20/06/2025",
        downloadLink: "https://github.com/JP-Linux/jogo-da-velha-java/releases/download/v1.0.0/JogoDaVelha-1.0-0.jar",
        sourceLink: "https://github.com/JP-Linux/jogo-da-velha-java"
    },
    {
        id: 2,
        title: "Scanner Exif (Linux)",
        lang: "cpp",
        icon: "fab fa-c",
        description: "Ferramenta de linha de comando em C++ para extrair e exibir metadados de imagens, utilizando a biblioteca Exiv2. Suporta EXIF, IPTC, XMP, comentários, informações básicas de arquivos e coordenadas GPS, com saída formatada em texto ou JSON.",
        version: "1.0.0",
        date: "10/07/2025",
        downloadLink: "https://github.com/JP-Linux/scanner_exif/releases/download/v1.0.0/scanner_exif",
        sourceLink: "https://github.com/JP-Linux/scanner_exif"
    },
    {
        id: 3,
        title: "Download Audio e Vídeo",
        lang: "rust",
        icon: "fab fa-rust",
        description: "Um utilitário simples e eficiente em Rust para download de conteúdo multimídia usando o poderoso yt-dlp como backend.",
        version: "1.0.0",
        date: "20/07/2025",
        downloadLink: "https://github.com/JP-Linux/download_audio_video/releases/tag/v1.0.0",
        sourceLink: "https://github.com/JP-Linux/download_audio_video"
    },
    {
        id: 4,
        title: "Teste DNS",
        lang: "python",
        icon: "fab fa-python",
        description: "Um script Python avançado para testar o desempenho e confiabilidade de servidores DNS listados em um arquivo JSON. Realiza testes paralelos, gera relatórios detalhados e fornece análises estatísticas.",
        version: "1.0.0",
        date: "17/07/2025",
        downloadLink: "https://github.com/JP-Linux/teste_dns/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/teste_dns"
    },
    {
        id: 5,
        title: "Cifra de Vigenère",
        lang: "java",
        icon: "fab fa-java",
        description: "Cifra de Vigenère em Java - Implementação Gráfica. Uma ferramenta educacional para criptografia/descriptografia de textos usando a clássica cifra de Vigenère, com interface amigável e validações robustas.",
        version: "1.0.0",
        date: "07/04/2025",
        downloadLink: "https://github.com/JP-Linux/cifra-vigenere-java/releases/download/v1.0.0/cifra-vigenere-java-1.0.0.jar",
        sourceLink: "https://github.com/JP-Linux/cifra-vigenere-java"
    },
    {
        id: 6,
        title: "Regra de Três",
        lang: "python",
        icon: "fab fa-python",
        description: "Uma aplicação gráfica simples para resolver problemas de proporcionalidade usando a regra de três, desenvolvida em Python com Tkinter. ",
        version: "0.2.0",
        date: "16/07/2025",
        downloadLink: "https://github.com/JP-Linux/regra_de_tres/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/regra_de_tres"
    }
];

// Habilidades
const skillsData = [
    {
        name: "Systems Programming",
        icon: "fas fa-microchip",
        tech: "C, C++, Rust, Assembly"
    },
    {
        name: "Backend",
        icon: "fas fa-server",
        tech: "Java, Python, Node.js"
    },
    {
        name: "Databases",
        icon: "fas fa-database",
        tech: "PostgreSQL, Redis, MongoDB"
    },
    {
        name: "DevOps",
        icon: "fas fa-cloud",
        tech: "Docker, Kubernetes, AWS"
    }
];

// Footer data
const footerData = {
    social: [
        {icon: "fab fa-github", link: "https://github.com/JP-Linux"},
        {icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/jorgepaulo-santos/"},
        {icon: "fab fa-instagram", link: "https://www.instagram.com/jorgepaulo_ba/"},
        {icon: "fab fa-dev", link: "#"}
    ],
    languages: [
        {icon: "fab fa-java", text: "Projetos Java", link: "https://github.com/search?q=owner%3AJP-Linux++language%3AJava&type=repositories"},
        {icon: "fas fa-c", text: "Projetos C/C++", link: "https://github.com/search?q=owner%3AJP-Linux++language%3AC%2B%2B&type=repositories"},
        {icon: "fab fa-rust", text: "Projetos Rust", link: "https://github.com/search?q=owner%3AJP-Linux++language%3ARust&type=repositories"},
        {icon: "fab fa-python", text: "Projetos Python", link: "https://github.com/search?q=owner%3AJP-Linux++language%3APython&type=repositories"}
    ],
    links: [
        {icon: "fas fa-download", text: "Todos os Downloads", link: "#"},
        {icon: "fas fa-code-branch", text: "Repositório GitHub", link: "https://github.com/JP-Linux?tab=repositories"},
        {icon: "fas fa-book", text: "Documentação", link: "#"},
        {icon: "fas fa-question-circle", text: "FAQ", link: "#"}
    ],
    contact: [
        {icon: "fas fa-envelope", text: "Email", link: "mailto:jorgepsan7@gmail.com"},
        {icon: "fas fa-map-marker-alt", text: "UNIP - Universidade Paulista", link: "https://www.unip.br/"},
        {icon: "fab fa-telegram", text: "Telegram", link: "https://t.me/jottap7"},
        {icon: "fas fa-file-pdf", text: "Currículo PDF", link: "#"}
    ]
};

// Função para renderizar os programas
function renderPrograms(filter = 'all') {
    const grid = document.getElementById('programs-grid');
    grid.innerHTML = '';
    
    const filteredPrograms = filter === 'all' 
        ? programsData 
        : programsData.filter(p => p.lang === filter);
    
    filteredPrograms.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.dataset.lang = program.lang;
        card.innerHTML = `
            <div class="card-header">
                <div class="lang-icon ${program.lang}">
                    <i class="${program.icon}"></i>
                </div>
                <h3>${program.title}</h3>
            </div>
            <div class="card-body">
                <p>${program.description}</p>
                <p><strong>Versão:</strong> ${program.version}</p>
                <p><strong>Data:</strong> ${program.date}</p>
            </div>
            <div class="card-footer">
                <a href="${program.downloadLink}" class="btn btn-primary" download>
                    <i class="fas fa-download"></i> Download
                </a>
                <a href="${program.sourceLink}" class="btn btn-secondary" target="_blank">
                    <i class="fas fa-code"></i> Source
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Função para renderizar as habilidades
function renderSkills() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = '';
    
    skillsData.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div>
                <h3>${skill.name}</h3>
                <p>${skill.tech}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Função para renderizar o footer
function renderFooter() {
    const footer = document.getElementById('footer-content');
    footer.innerHTML = `
        <div class="footer-column">
            <h3>JP-Linux</h3>
            <p>Portfólio profissional para exibição e distribuição de programas e projetos de software.</p>
            <div class="social-links">
                ${footerData.social.map(social => `
                    <a href="${social.link}" class="social-icon">
                        <i class="${social.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
        
        <div class="footer-column">
            <h3>Linguagens</h3>
            <ul class="footer-links">
                ${footerData.languages.map(lang => `
                    <li><a href="${lang.link}"><i class="${lang.icon}"></i> ${lang.text}</a></li>
                `).join('')}
            </ul>
        </div>
        
        <div class="footer-column">
            <h3>Links Úteis</h3>
            <ul class="footer-links">
                ${footerData.links.map(link => `
                    <li><a href="${link.link}"><i class="${link.icon}"></i> ${link.text}</a></li>
                `).join('')}
            </ul>
        </div>
        
        <div class="footer-column">
            <h3>Contato</h3>
            <ul class="footer-links">
                ${footerData.contact.map(contact => `
                    <li><a href="${contact.link}"><i class="${contact.icon}"></i> ${contact.text}</a></li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar conteúdo
    renderPrograms();
    renderSkills();
    renderFooter();

    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Filtragem de programas
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderPrograms(button.dataset.filter);
        });
    });
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Observador de interseção para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.program-card, .skill-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
