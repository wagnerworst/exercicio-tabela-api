import "./scss/index.scss"
import { ExibeResultadoCadastro } from './tela';
import { 
    postApiLivros,
    VerificaResponseEhErro
 } from './apiLivros'

// 1 - Adicionar evento de click no botão de execução
document.getElementById("cadastrarLivro")
    .addEventListener("click", IniciaCadastroLivro);

// 2 - Criar função de início do processo
async function IniciaCadastroLivro(){
    let tituloLivro = document.getElementById("titulo").value;
    let descricaoLivro = document.getElementById("descricao").value;
    let livrosJson = await postApiLivros(tituloLivro,descricaoLivro);
    let validacaoResponse = VerificaResponseEhErro(livrosJson);
    ExibeResultadoCadastro(livrosJson,validacaoResponse)
}