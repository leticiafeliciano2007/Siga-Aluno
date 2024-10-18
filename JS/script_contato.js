// Função para inserir as informações de contato
function inserirContato() {
    const contatoHTML = `
    <!--Contato-->
    <section class="Contato" id="Contato">
        <div class="meio-contato">
            <h3>Redes Sociais</h3>
            <div class="icons">
                <div class="social_icon">
                    <a href="https://www.facebook.com/centropaulasouza" target="_blank">
                        <i class='bx bxl-facebook-square'></i>
                    </a>
                </div>
                <div class="social_icon">
                    <a href="https://www.instagram.com/centropaulasouza/" target="_blank">
                        <i class='bx bxl-instagram'></i>
                    </a>
                </div>
                <div class="social_icon">
                    <a href="https://twitter.com/paulasouzasp" target="_blank">
                        <i class='bx bxl-twitter'></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="meio-contato">
            <h3>Sites</h3>
            <div class="vesti-etec">
                <li>
                    <a href="https://www.vestibulinhoetec.com.br/home/" target="_blank">Vestibulinho Etec</a>
                </li>
            </div>
            <div class="vesti-fatec">
                <li>
                    <a href="https://www.vestibularfatec.com.br/home/" target="_blank">Vestibular Fatec</a>
                </li>
            </div>
            <div class="web-sai">
                <li>
                    <a href="https://websai-react.azurewebsites.net/" target="_blank">Web Sai</a>
                </li>
            </div>
            <div class="inova-cps">
                <li>
                    <a href="https://inova.cps.sp.gov.br/" target="_blank">Inova CPS</a>
                </li>
            </div>
            <div class="email-insti">
                <li>
                    <a href="http://www.etec.sp.gov.br/view/Default.aspx" target="_blank">Email Institucional</a>
                </li>
            </div>
        </div>

        <div class="meio-contato">
            <h3>Fale Conosco</h3>
            <div class="email">
                <li>
                    <a href="email.html">E-Mail</a>
                </li>
            </div>
            <div class="suporte">
                <li>
                    <a href="suporte.html">Suporte</a>
                </li>
            </div>
        </div>
    </section>`;
    
    document.body.insertAdjacentHTML('beforeend', contatoHTML);
}

// Executando a função ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    inserirContato(); // Insere as informações de contato
});
