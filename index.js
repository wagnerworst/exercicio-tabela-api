import "./scss/index.scss"
// Exercício 1
// 1 - Adicionar evento de click no botão de execução
document.getElementById("cadastrarLivro")
    .addEventListener("click", iniciaCadastroLivro);
// 2 - Criar função de início do processo
function iniciaCadastroLivro(){
    let tituloLivro = document.getElementById("titulo").value;
    let descricaoLivro = document.getElementById("descricao").value;
    getApiLivros(tituloLivro,descricaoLivro);
}
// 3 - Criar função para envio de dados para a API
async function getApiLivros(titulo, descricao){
    let url = "https://api-aula.up.railway.app/livros";
    let payload = {
        title: titulo,
        description: descricao
    }
    let fetchOption = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"Content-type": "application/json"}
    }
    let retorno = await fetch(url,fetchOption);
    let retornoJson = await retorno.json(retornoJson)
    exibeResultadoCadastro(retornoJson)
}
// 4 - Informar tela sobre sucesso de cadastro
function exibeResultadoCadastro(retornoPost){
    let divResultado = document.getElementById("resultado");
    divResultado.innerText = retornoPost;
    divResultado.style.display = "block"
}
