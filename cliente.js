import "./scss/cliente.scss"
import { AdicionarLivrosNaTabela } from './tela'
import { filtrarVetor } from './utilitariosVetores'

let livros = [] 
let divBusca = document.getElementById("busca");
divBusca.addEventListener("keyup", iniciarFiltrarLivros);
iniciar()

async function iniciar() {
    livros = await apiLivros_BuscarTodosOsLivros()
    AdicionarLivrosNaTabela(livros)
}
async function apiLivros_BuscarTodosOsLivros() {
    let livro = await fetch("https://api-aula.up.railway.app/livros");
    return livro.json();
}
function iniciarFiltrarLivros() {
    let valorFiltro = divBusca.value;
    if (valorFiltro){
        let livrosFiltrados = [];
        livrosFiltrados = filtrarVetor(livros, valorFiltro, "title");
        livrosFiltrados = livrosFiltrados.concat(filtrarVetor(livros, valorFiltro, "description")) 
        AdicionarLivrosNaTabela(livrosFiltrados)
    }
    else
    {
        iniciar()
    }
}