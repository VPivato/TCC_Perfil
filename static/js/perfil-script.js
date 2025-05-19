const botoes = document.querySelectorAll('.aside-wrapper');
const conteudos = document.querySelectorAll('.conteudo-pagina');

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // Remover classe 'ativo' de todos os botões
        botoes.forEach(b => b.classList.remove('active'));

        // Adicionar 'ativo' ao botão clicado
        botao.classList.add('active');

        // Esconder todos os conteúdos
        conteudos.forEach(c => c.classList.remove('ativo'));

        // Mostrar conteúdo correspondente
        const id = botao.id.replace('-wrapper', '')
        const conteudoSelecionado = document.getElementById(`conteudo-${id}`);
        if (conteudoSelecionado) {
            conteudoSelecionado.classList.add('ativo');
            // Scroll para o conteúdo em telas pequenas
            if (window.innerWidth <= 1024) {
                conteudoSelecionado.scrollIntoView({ behavior: "smooth" });
            }
        }
    })
})


const toggle = document.getElementById('modo-escuro-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('modo-escuro');
  localStorage.setItem('modo-escuro', document.body.classList.contains('modo-escuro'));
});
// Restaurar ao carregar a página
if (localStorage.getItem('modo-escuro') === 'true') {
  document.body.classList.add('modo-escuro');
  toggle.checked = true;
}