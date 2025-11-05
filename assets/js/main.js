// =====================================================================
// 1. Funções utilitárias e templates básicos
// =====================================================================

const createErrorMessage = (fieldId) => `
    <span class="error-message" id="error-${fieldId}"></span>
`;

// =====================================================================
// 2. Sistema de templates: conteúdo das páginas
// =====================================================================

const pageTemplates = {
    home: `
        <section id="sobre-organizacao">
            <h1>ONG Luz do Amanhã: Iluminando Caminhos</h1>
            <p>Somos uma organização não governamental dedicada a criar um futuro mais justo e sustentável. Nossa missão se baseia nos pilares de <strong>Solidariedade, Educação e Meio Ambiente</strong>, transformando vidas e comunidades em situação de vulnerabilidade.</p>
            <figure>
                <img src="assets/img/acao-luz.jpg" alt="Foto de uma ação social da ONG em campo" width="600">
                <figcaption>Mais de 5.000 pessoas impactadas por ano em nossas ações.</figcaption>
            </figure>
            <h2>Nossos Pilares</h2>
            <ul>
                <li><strong>Solidariedade:</strong> Apoio direto e humanitário a quem mais precisa.</li>
                <li><strong>Educação:</strong> Acesso ao conhecimento para quebrar o ciclo da pobreza.</li>
                <li><strong>Meio Ambiente:</strong> Conscientização e ações práticas de sustentabilidade.</li>
            </ul>
        </section>
        <section id="contato-info">
            <h2>Fale Conosco</h2>
            <address>
                <p><strong>Endereço:</strong> Av. Esperança, 404 - Bairro Novo - São Paulo/SP</p>
                <p><strong>Telefone:</strong> <a href="tel:+5511987654321">(11) 98765-4321</a></p>
                <p><strong>Email:</strong> <a href="mailto:contato@ongluzdoamanha.org.br">contato@ongluzdoamanha.org.br</a></p>
                <p><em>Atendimento: Segunda à Sexta, das 9h às 17h.</em></p>
            </address>
        </section>
    `,
    
    projetos: `
        <section id="pilares-de-acao">
            <h1>Nossas Três Grandes Causas</h1>
            <p>Conheça as iniciativas detalhadas que movem a ONG Luz do Amanhã.</p>

            <article id="solidariedade">
                <h2>1. Programa Abraço Solidário</h2>
                <figure>
                    <img src="assets/img/solidariedade.jpeg" alt="Voluntários entregando alimentos" width="400">
                    <figcaption>Distribuição de cestas básicas e agasalhos.</figcaption>
                </figure>
                <p>Fornecemos auxílio imediato: alimentos, agasalhos e kits de higiene. É nossa resposta direta às crises e à pobreza extrema.</p>
                <h3>Como Doar</h3>
                <p>Doações via PIX (12.345.678/0001-90) ou alimentos não perecíveis em nossa sede.</p>
            </article>

            <article id="educacao">
                <h2>2. Projeto Semente do Saber</h2>
                <figure>
                    <img src="assets/img/educacao.jpg" alt="Jovens em aula" width="400">
                    <figcaption>Garantindo um futuro mais promissor com acesso à educação.</figcaption>
                </figure>
                <p>Oferecemos aulas de reforço, oficinas de letramento digital e cursos profissionalizantes.</p>
            </article>

            <article id="meio-ambiente">
                <h2>3. Guardiões da Natureza</h2>
                <figure>
                    <img src="assets/img/meio-ambiente.jpg" alt="Voluntários plantando mudas" width="400">
                    <figcaption>Ações de plantio e limpeza de rios.</figcaption>
                </figure>
                <p>Promovemos a conscientização ambiental e projetos de reflorestamento em áreas degradadas.</p>
            </article>
        </section>

        <section id="voluntariado">
            <h2>Junte-se a Nós!</h2>
            <p>Seja um voluntário e ilumine novos caminhos. Cadastre-se agora:</p>
            <p><a href="#" data-target="cadastro" class="link-cadastro">Quero Participar</a></p>
        </section>
    `,

    contato: `
        <section>
            <h1>Canais de Contato</h1>
            <p>Entre em contato pelos nossos canais e tire suas dúvidas.</p>
            
            <h2>Suporte</h2>
            <p>Email: <a href="mailto:eduardo.martins@teste.com.br">eduardo.martins@teste.com.br</a></p>
            <p>Telefone: <a href="tel:5511912345678">5511912345678</a></p>
            <p><a href="https://wa.me/5511999998888" target="_blank">WhatsApp</a></p>
            
            <h2>Financeiro</h2>
            <p>Email: <a href="mailto:eduardo.martins@teste.com.br">eduardo.martins@teste.com.br</a></p>
            <p>Telefone: <a href="tel:5511912345678">5511912345678</a></p>
            <p><a href="https://wa.me/5511999998888" target="_blank">WhatsApp</a></p>
            
            <h2>Comercial</h2>
            <p>Email: <a href="mailto:eduardo.martins@teste.com.br">eduardo.martins@teste.com.br</a></p>
            <p>Telefone: <a href="tel:5511912345678">5511912345678</a></p>
            <p><a href="https://wa.me/5511999998888" target="_blank">WhatsApp</a></p>
        </section>
    `,
    
    cadastro: `
        <section>
            <h1>Formulário de Participação</h1>
            <p>Preencha o formulário para se cadastrar como apoiador, voluntário ou doador.</p>

            <form id="cadastroForm" action="/processar-participacao" method="post">
                <fieldset>
                    <legend>Informações Pessoais</legend>

                    <div>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome_completo" placeholder="EX: João da Silva" required>
                        ${createErrorMessage('nome')}
                    </div>

                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" required>
                        ${createErrorMessage('email')}
                    </div>

                    <div>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" maxlength="14" placeholder="000.000.000-00" required>
                        ${createErrorMessage('cpf')}
                    </div>

                    <div>
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" maxlength="15" placeholder="(99) 99999-9999" required>
                        ${createErrorMessage('telefone')}
                    </div>

                    <div>
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="data_nascimento" required>
                        ${createErrorMessage('nascimento')}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Localização</legend>

                    <div>
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" maxlength="9" placeholder="99999-999" required>
                        ${createErrorMessage('cep')}
                    </div>

                    <div>
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>
                        ${createErrorMessage('endereco')}
                    </div>

                    <div>
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>
                        ${createErrorMessage('cidade')}
                    </div>

                    <div>
                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" required>
                            <option value="" disabled selected>Selecione seu Estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="BA">Bahia</option>
                        </select>
                        ${createErrorMessage('estado')}
                    </div>
                </fieldset>

                <figure>
                    <img src="assets/img/cadastro-icone.png" alt="Ícone de formulário" width="100">
                    <figcaption>Seus dados são confidenciais e usados apenas para fins da ONG.</figcaption>
                </figure>

                <div>
                    <button type="submit">Enviar Cadastro e Aderir</button>
                    ${createErrorMessage('form-global')}
                </div>
            </form>
        </section>
    `
};

// =====================================================================
// 3. Validação do formulário de cadastro
// =====================================================================

function setupFormValidation() {
    const form = document.getElementById('cadastroForm');
    if (!form) return;

    const clearErrors = (field) => {
        field.classList.remove('is-invalid');
        const errorElement = document.getElementById(`error-${field.id}`);
        if (errorElement) errorElement.textContent = '';
    };
    
    const setError = (field, message) => {
        field.classList.add('is-invalid');
        const errorElement = document.getElementById(`error-${field.id}`);
        if (errorElement) errorElement.textContent = message;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        const fields = form.querySelectorAll('input[required], select[required]');
        document.getElementById('error-form-global').textContent = '';

        fields.forEach(field => {
            clearErrors(field);
            let error = '';
            
            if (!field.value.trim()) error = 'Este campo é obrigatório.';
            else if (field.id === 'email') {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(field.value)) error = 'E-mail inválido.';
            } else if (field.id === 'cpf') {
                const cpfValue = field.value.replace(/\\D/g, '');
                if (cpfValue.length !== 11 || /(\\d)\\1{10}/.test(cpfValue))
                    error = 'CPF inválido.';
            } else if (field.id === 'nascimento') {
                const data = new Date(field.value);
                if (data > new Date()) error = 'Data de nascimento inválida.';
            }

            if (error) {
                setError(field, error);
                isValid = false;
            }
        });

        if (isValid) {
            alert('Sucesso! Cadastro enviado.');
            form.reset();
        } else {
            document.getElementById('error-form-global').textContent =
                '⚠️ Corrija os campos destacados para continuar.';
        }
    });
}

// =====================================================================
// 4. Roteamento SPA
// =====================================================================

function attachRouterListeners() {
    const navLinks = document.querySelectorAll('nav a[data-target], .link-cadastro[data-target]');
    navLinks.forEach(link => {
        link.removeEventListener('click', handleNavigation);
        link.addEventListener('click', handleNavigation);
    });
}

function handleNavigation(event) {
    event.preventDefault();
    const pageName = event.currentTarget.getAttribute('data-target');
    if (pageTemplates[pageName]) renderPage(pageName);
}

function renderPage(pageName) {
    const container = document.getElementById('app-container');
    container.innerHTML = pageTemplates[pageName] || pageTemplates['home'];
    
    if (pageName === 'cadastro') setupFormValidation();
    window.history.pushState(null, null, `#${pageName}`);
    attachRouterListeners();
}

// =====================================================================
// 5. Inicialização da aplicação
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.substring(1) || 'home';
    renderPage(initialPage);
    
    window.onpopstate = () => {
        const page = window.location.hash.substring(1) || 'home';
        renderPage(page);
    };
});
