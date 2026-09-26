document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       DADOS DAS ATIVIDADES
    ================================= */
    const oficinas = [
        {
            nome: "Ballet",
            categoria: "Expressão",
            descricao: "Desenvolver a coordenação motora, a disciplina, a postura e a expressão corporal por meio da dança.",
            imagem: "ballet.avif"
        },
        {
            nome: "Música",
            categoria: "Arte",
            descricao: "Estimular a criatividade, a sensibilidade e a expressão por meio do canto e da musicalização.",
            imagem: "musica.avif"
        },
        {
            nome: "Tecnologia",
            categoria: "Inclusão",
            descricao: "Promover a inclusão digital por meio de conhecimentos básicos de informática e tecnologia.",
            imagem: "tecnologia.avif"
        },
        {
            nome: "Matemática",
            categoria: "Educação",
            descricao: "Auxiliar no aprendizado, no raciocínio lógico e no reforço escolar de forma prática e divertida.",
            imagem: "matematica.avif"
        }
    ];

    /* =================================
       CRIAÇÃO DOS CARDS
    ================================= */
    const cardsGrid = document.getElementById("cardsGrid");

    if (cardsGrid) {
        oficinas.forEach(function (oficina) {
            const card = `
                <article class="card-disciplina">
                    <div class="card-img-wrapper">
                        <img 
                            src="${oficina.imagem}" 
                            alt="Atividade de ${oficina.nome}" 
                            class="card-img"
                        >
                    </div>

                    <span>${oficina.categoria}</span>
                    <h3>${oficina.nome}</h3>
                    <p>${oficina.descricao}</p>

                    <button 
                        type="button" 
                        class="btn btn-interesse" 
                        data-oficina="${oficina.nome}"
                    >
                        Quero participar
                    </button>
                </article>
            `;

            cardsGrid.innerHTML += card;
        });
    }

    /* =================================
       BOTÕES DOS CARDS
    ================================= */
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-interesse")) {
            const oficina = event.target.dataset.oficina;
            const mensagem = document.getElementById("mensagemUsuario");

            if (mensagem) {
                mensagem.textContent = 
                    "Você demonstrou interesse em ensinar " + 
                    oficina + 
                    "! Faça seu cadastro como voluntário para continuar.";

                mensagem.classList.add("ativa");

                mensagem.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    });

    /* =================================
       FORMULÁRIO DE CADASTRO
    ================================= */
    const formCadastro = document.getElementById("formCadastro");
    const modalConfirmacao = document.getElementById("modalConfirmacao");
    const textoModal = document.getElementById("textoModal");
    const btnFecharModal = document.getElementById("btnFecharModal");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const email = document.getElementById("email").value.trim();
            const endereco = document.getElementById("endereco").value.trim();
            const disciplina = document.getElementById("disciplina").value;

            if (nome === "" || cpf === "" || email === "" || endereco === "" || disciplina === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            const voluntario = {
                nome: nome,
                cpf: cpf,
                email: email,
                endereco: endereco,
                disciplina: disciplina
            };

            // Salva no localStorage
            localStorage.setItem("voluntarioSAICA", JSON.stringify(voluntario));

            // Atualiza e exibe o Modal
            if (textoModal) {
                textoModal.textContent = 
                    "Obrigado, " + nome + 
                    "! Seu interesse em atuar com " + disciplina + 
                    " foi registrado. Entraremos em contato em breve.";
            }

            if (modalConfirmacao) {
                modalConfirmacao.classList.add("active");
            }

            // Reseta o formulário
            formCadastro.reset();
        });
    }

    /* =================================
       FECHAR MODAL
    ================================= */
    if (btnFecharModal && modalConfirmacao) {
        btnFecharModal.addEventListener("click", function () {
            modalConfirmacao.classList.remove("active");
        });
    }
});