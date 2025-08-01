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
        description: "Uma aplicação gráfica simples para resolver problemas de proporcionalidade usando a regra de três, desenvolvida em Python com Tkinter.",
        version: "0.2.0",
        date: "16/07/2025",
        downloadLink: "https://github.com/JP-Linux/regra_de_tres/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/regra_de_tres"
    },
    {
        id: 7,
        title: "Limpar Cache Arch Linux",
        lang: "shell",
        icon: "fab fa-linux",
        description: "Este script automatiza a limpeza do cache de pacotes do pacman, verificando regularmente o espaço utilizado e oferecendo opções de limpeza quando o tamanho excede um limite configurável (6GB por padrão).",
        version: "1.0.0",
        date: "08/06/2025",
        downloadLink: "https://github.com/JP-Linux/limpar-cache-archlinux/releases/tag/v1.0.0p",
        sourceLink: "https://github.com/JP-Linux/limpar-cache-archlinux"
    },
    {
        id: 8,
        title: "KeyBin",
        lang: "cpp",
        icon: "fab fa-c",
        description: "Teclado Matricial com Saída Binária<br><br>Projeto Arduino que converte pressionamentos de teclas em sinais binários de 4 bits, ideal para controle de displays digitais ou interfaces simples.",
        version: "1.0.0",
        date: "12/06/2025",
        downloadLink: "https://github.com/JP-Linux/teclado_matricial_com_saida_binaria/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/teclado_matricial_com_saida_binaria"
    },
    {
        id: 9,
        title: "Calculadora Obstétrica - (DPP)",
        lang: "python",
        icon: "fab fa-python",
        description: "Ferramenta clínica para cálculo da Data Provável do Parto (DPP), idade gestacional e trimestre de gravidez, seguindo a Regra de Naegele.",
        version: "1.0.0",
        date: "13/04/2025",
        downloadLink: "https://github.com/JP-Linux/Calculadora-Obstetrica/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/Calculadora-Obstetrica"
    },
    {
        id: 10,
        title: "Filtrador de Listas M3U (IPTV)",
        lang: "python",
        icon: "fab fa-python",
        description: "Um script Python que filtra listas M3U, verificando cada stream através de testes reais de reprodução com FFmpeg para garantir que apenas links funcionais sejam mantidos.",
        version: "1.0.0",
        date: "01/08/2025",
        downloadLink: "https://github.com/JP-Linux/filtro-m3u/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/filtro-m3u"
    },
    {
        id: 11,
        title: "Corrida de Cachorros",
        lang: "cpp",
        icon: "fab fa-c",
        description: "Um jogo de terminal onde você pode apostar em corridas de cachorros! Gerencie seu saldo, escolha seu cachorro favorito e assista à corrida animada no terminal.",
        version: "1.0.0",
        date: "28/07/2025",
        downloadLink: "https://github.com/JP-Linux/corrida-cachorros/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/corrida-cachorros"
    },
    {
        id: 12,
        title: "Admin Usuários e Grupos (Linux)",
        lang: "shell",
        icon: "fab fa-linux",
        description: "Ferramenta interativa para gestão avançada de usuários e grupos em sistemas Linux com controle de acesso granular.",
        version: "1.0.0",
        date: "18/04/2025",
        downloadLink: "https://github.com/JP-Linux/gestao_usuarios/archive/refs/heads/main.zip",
        sourceLink: "https://github.com/JP-Linux/gestao_usuarios"
    }
];

// Habilidades
const skillsData = [
    {
        name: "Systems Programming",
        icon: "fas fa-microchip",
        tech: "C, C++, Rust, Assembly, Shell"
    },
    {
        name: "Backend",
        icon: "fas fa-server",
        tech: "Java, Python, Node.js"
    },
    {
        name: "Databases",
        icon: "fas fa-database",
        tech: "PostgreSQL, Redis, MongoDB, Sqlite"
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

// Adicionar paginação
let currentPage = 1;
const programsPerPage = 6;

// Variável global para armazenar o filtro atual
let currentFilter = 'all';

// Função renderPrograms atualizada
function renderPrograms(filter = 'all') {
    currentFilter = filter;
    const grid = document.getElementById('programs-grid');
    grid.innerHTML = '';

    const filteredPrograms = filter === 'all'
    ? programsData
    : programsData.filter(p => p.lang === filter);

    const startIndex = (currentPage - 1) * programsPerPage;
    const paginatedPrograms = filteredPrograms.slice(startIndex, startIndex + programsPerPage);

    paginatedPrograms.forEach(program => {
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
        <p class="primeiro-paragrafo">${program.description}</p>
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

    renderPagination(filteredPrograms.length);
}
// Função para renderizar a paginação
function renderPagination(totalPrograms) {
    // Remover paginação existente
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }

    const totalPages = Math.ceil(totalPrograms / programsPerPage);
    if (totalPages <= 1) return; // Não mostrar paginação se só tiver 1 página

    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    // Botão Anterior
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&laquo;';
        prevBtn.addEventListener('click', () => {
            currentPage--;
            renderPrograms(currentFilter);
        });
        pagination.appendChild(prevBtn);
    }

    // Botões de página
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.toggle('active', i === currentPage);
        btn.addEventListener('click', () => {
            currentPage = i;
            renderPrograms(currentFilter);
        });
        pagination.appendChild(btn);
    }

    // Botão Próximo
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.addEventListener('click', () => {
            currentPage++;
            renderPrograms(currentFilter);
        });
        pagination.appendChild(nextBtn);
    }

    document.getElementById('programs').appendChild(pagination);
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
            currentPage = 1; // Resetar para primeira página
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

// Inicialização melhorada
function init() {
    renderPrograms();
    renderSkills();
    renderFooter();
    setupEventListeners();
    setupIntersectionObserver(); // Adicionar esta linha
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observar os cards após serem renderizados
    setTimeout(() => {
        document.querySelectorAll('.program-card, .skill-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
}

function setupIntersectionObserver() {
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
}

// Iniciar aplicação
document.addEventListener('DOMContentLoaded', init);
