// Função para inserir o header
async function inserirHeader() {
    const headerHTML = `
    <header id="Cabecalho">
            <div class="logo">
                <a href="index.html">
                    <img src="./IMG/logo-siga.png">
                </a>
            </div>
        
            <div class="navbar">
                <div class="nav-itens" id="usuario-item">
                    <ul>
                        <li>
                            <a href="usuario.html">
                                <p id="usuario">Usuário</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-itens">
                    <ul>
                        <a href="#">
                            <li>
                                <p>
                                    Consultas
                                    <i class="fas fa-caret-down"></i>
                                </p>
                                <div class="nav-sub-itens">
                                    <ul>
                                        <a href="vida_academica.html">
                                            <li id="vida_academica">Vida Acadêmica</li>
                                        </a>
                                        <a href="boletim.html">
                                            <li id="boletim_escolar">Boletim Escolar</li>
                                        </a>
                                        <a href="ficha_desempenho.html">
                                            <li id="ficha_desempenho">Ficha Desempenho</li>
                                        </a>
                                        <a href="prog_parcial.html">
                                            <li id="prog_parcial">Prog. Parcial</li>
                                        </a>
                                        <a href="horario_aula.html">
                                            <li id="horario_cursos">Horário das Aulas</li>
                                        </a>
                                    </ul>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div class="nav-itens">
                    <ul>
                        <a href="#">
                            <li>
                                <p>
                                    Solicitação
                                    <i class="fas fa-caret-down"></i>
                                </p>
                                <div class="nav-sub-itens">
                                    <ul>
                                        <a href="emails.html">
                                            <li id="emails">E-mails</li>
                                        </a>
                                        <a href="reconsideracao.html">
                                            <li id="reconsideracao">Reconsideração</li>
                                        </a>
                                        <a href="atualizacao_cadastral.html">
                                            <li id="atualizacao_cadastral">Atualização Cadastral</li>
                                        </a>
                                    </ul>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div class="nav-itens">
                    <ul>
                        <li>
                            <a href="#Contato">
                                <p>Contato</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-itens" id="sobre-item">
                    <ul>
                        <li>
                            <a href="sobre_base.html">
                                <p>Sobre</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-itens" id="mural-item">
                    <ul>
                        <li>
                            <a href="mural.html">
                                <p>Mural</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <div class="mobile-menu" id="mobilemenu">
        <button class="close-menu" id="closemenu">
            <i class="fas fa-times"></i>
        </button>

        <div class="nav-itens-mobile">
            <ul>
                <li>
                    <div>
                        <a class="text-nav-itens" id="consultas">Consultas</a>
                        <i class="fas fa-caret-down text-nav-itens"></i>
                    </div>

                </li>

                <div class="nav-sub-itens-mobile" id="consultas-menu">
                    <ul>
                        <li style="width: 100%;"><a href="vida_academica.html" class="text-nav-itens">Vida Acadêmica</a></li>
                        <li style="width: 100%;"><a href="boletim.html" class="text-nav-itens">Boletim Escolar</a></li>
                        <li style="width: 100%;"><a href="ficha_desempenho.html" class="text-nav-itens">Ficha Desempenho</a></li>
                        <li style="width: 100%;"><a href="prog_parcial.html" class="text-nav-itens">Prog. Parcial</a></li>
                        <li style="width: 100%;"><a href="horario_aula.html" class="text-nav-itens">Horário das Aulas</a></li>
                    </ul>
                </div>

                <li>
                    <div>
                        <a class="text-nav-itens" id="solicitacao">Solicitações</a>
                        <i class="fas fa-caret-down text-nav-itens"></i>
                    </div>
                </li>

                <div class="nav-sub-itens-mobile" id="solicitacao-menu">
                    <ul>
                        <li style="width: 100%;"><a href="emails.html" class="text-nav-itens">E-mails</a></li>
                        <li style="width: 100%;"><a href="reconsideracao.html" class="text-nav-itens">Reconsideração</a></li>
                        <li style="width: 100%;"><a href="atualizacao_cadastral.html" class="text-nav-itens">Atualização Cadastral</a></li>
                    </ul>
                </div>

                <li>
                    <a href="#Contato"  class="text-nav-itens">Contato</a>
                </li>

                <li>
                    <a href="./sobre_base.html"  class="text-nav-itens">Sobre</a>
                </li>

                <li>
                    <a href="./mural.html"  class="text-nav-itens">Mural</a>
                </li>
            </ul>
        </div>
    </div>
            <button class="hamburguer" id="bugbtn">
                <i class="fas fa-bars"></i>
            </button>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Função para remover as opções do menu com base na página atual
function removerOpcoes() {
    const currentPage = window.location.pathname;

    function removeElement(id) {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "none"; // Esconde o elemento
        }
    }

    // Remover logo CPS nas páginas especificadas
    const logoCps = document.getElementById("logo_cps");
    const pagesWithoutLogo = [
        "mural.html",
        "vida_academica.html",
        "boletim.html",
        "prog_parcial.html",
        "horario_aula.html",
        "emails.html",
        "reconsideracao.html",
        "atualizacao_cadastral.html",
        "ficha_desempenho.html"
    ];

    // Esconde o logo CPS nas páginas especificadas
    if (pagesWithoutLogo.some(page => currentPage.includes(page))) {
        if (logoCps) {
            logoCps.style.display = "none"; // Esconde o logo CPS
        }
    }

    // Esconde as opções de menu com base na página atual
    if (currentPage.includes("emails.html")) {
        removeElement("emails");
    } else if (currentPage.includes("reconsideracao.html")) {
        removeElement("reconsideracao");
    } else if (currentPage.includes("vida_academica.html")) {
        removeElement("vida_academica");
    } else if (currentPage.includes("atualizacao_cadastral.html")) {
        removeElement("atualizacao_cadastral");
    } else if (currentPage.includes("boletim.html")) {
        removeElement("boletim_escolar");
    } else if (currentPage.includes("ficha_desempenho.html")) {
        removeElement("ficha_desempenho");
    } else if (currentPage.includes("horario_aula.html")) {
        removeElement("horario_cursos");
    } else if (currentPage.includes("sobre_base.html")) {
        removeElement("sobre-item");
    } else if (currentPage.includes("usuario.html")) {
        removeElement("usuario-item");
    } else if (currentPage.includes("mural.html")) {
        const muralItem = document.getElementById("mural-item");
        if (muralItem) {
            muralItem.innerHTML = `
            <ul>
                <li>
                    <a href="index.html" onclick="confirmarSaida(event)">
                        <p>Sair</p>
                    </a>
                </li>
            </ul>`;
        }
    }
}

// Função para confirmar a saída
function confirmarSaida(event) {
    if (!confirm("Sua conta será deslogada!!")) {
        event.preventDefault();
    }
}

// Função para adicionar os eventos do menu
function adicionarEventosMenu() {
    const hamburguerbtn = document.querySelector("#bugbtn");
    const closebtn = document.querySelector("#closemenu");
    const menubtn = document.querySelector("#mobilemenu");

    hamburguerbtn?.addEventListener("click", function () {
        menubtn.classList.add("flex");
    });

    closebtn?.addEventListener("click", function () {
        menubtn.classList.remove("flex");
    });

    // Selecionando os elementos do menu dinâmico
    const consultas = document.getElementById('consultas');
    const solicitacao = document.getElementById('solicitacao');
    const consultasMenu = document.getElementById('consultas-menu');
    const solicitacaoMenu = document.getElementById('solicitacao-menu');

    // Adicionando os eventos de clique para expandir/colapsar os submenus
    consultas?.addEventListener("click", function () {
        consultasMenu?.classList.toggle('active');
    });

    solicitacao?.addEventListener("click", function () {
        solicitacaoMenu?.classList.toggle('active');
    });
}

    // Executando as funções de forma assíncrona
    document.addEventListener("DOMContentLoaded", async function () {
    await inserirHeader();  // Insere o header
    removerOpcoes();
    adicionarEventosMenu();      // Remove as opções após o header ser inserido
});