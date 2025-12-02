let slideIndex = 0;
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");
    let autoPlayInterval;

    // Inicia o carrossel
    mostrarSlide(slideIndex);
    iniciarAutoPlay();

    // Função para avançar ou voltar
    function mudarSlide(n) {
        mostrarSlide(slideIndex += n);
        reiniciarTimer(); // Reinicia o tempo se o usuário clicar
    }

    // Função para ir direto para um slide (pelos dots)
    function irParaSlide(n) {
        mostrarSlide(slideIndex = n);
        reiniciarTimer();
    }

    // Lógica principal de exibição
    function mostrarSlide(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        // Esconde todos
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            if(dots[i]) dots[i].classList.remove("active");
        }

        // Mostra o atual
        slides[slideIndex].classList.add("active");
        if(dots[slideIndex]) dots[slideIndex].classList.add("active");
    }

    // Auto Play (muda a cada 5 segundos)
    function iniciarAutoPlay() {
        autoPlayInterval = setInterval(() => {
            mudarSlide(1);
        }, 5000); // 5000ms = 5 segundos
    }

    function reiniciarTimer() {
        clearInterval(autoPlayInterval);
        iniciarAutoPlay();
    }

// Dinamico

const URL = "https://3egz0ik3.api.sanity.io/v2025-12-02/data/query/modelo?query=*+%5B_type+%3D%3D+%22contentWelcome%22%5D%7B%0A++Historia%0A%7D&perspective=drafts"

async function carregarProdutos() {
    // 1. Busca os dados na API
    const response = await fetch(URL, {
        method: "GET",
    });

    const json = await response.json();
    const result = json.result;

    // 2. SELECIONAR O LOCAL: Aqui você define onde o texto vai entrar
    // Exemplo: procurando um elemento com id "area-de-texto"
    const localDeDestino = document.querySelector("#wel-p");

    // Limpa o local antes de adicionar (opcional, evita duplicação se chamar a função 2x)
    localDeDestino.innerHTML = ""; 

    for (let index = 0; index < result.length; index++) {
        const element = result[index];

        // 3. CRIAÇÃO: Cria apenas o elemento P
        const p = document.createElement("p");
        
        // Adiciona uma classe se quiser estilizar no CSS depois (opcional)
        p.classList.add("texto-produto"); 

        // 4. CONTEÚDO: Coloca o texto da API dentro do P
        // (Certifique-se que 'descricao' é o nome correto na sua API)
        p.innerText = element.Historia;

        // 5. ALOCAÇÃO: Coloca o P dentro do elemento que selecionamos no passo 2
        localDeDestino.append(p);
    }
}

carregarProdutos();