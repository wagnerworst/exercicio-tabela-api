import "./scss/cliente.scss"
import { AdicionarLivrosNaTabela } from './tela'
import { FiltrarVetor } from './utilitariosVetores'
import { BuscarTodosOsLivros } from './apiLivros'

//Declaração de recursos utilizados em escopo global.
let livros = [] 
let divBusca = document.getElementById("busca");
divBusca.addEventListener("keyup", IniciarFiltrarLivros);
//Inicia tudo sem interações na pagina.
Iniciar()

//Inicia todo fluxo para primeira abertura da tela e exibição dos livros.
async function Iniciar() {
    livros = await BuscarTodosOsLivros()
    AdicionarLivrosNaTabela(livros)
}

//Inicia a filtragem da lista até a apresentação da mesma já fitlrada.
function IniciarFiltrarLivros() {
    let valorFiltro = divBusca.value;
    if (valorFiltro){
        let livrosFiltrados = [];
        livrosFiltrados = FiltrarVetor(livros, valorFiltro, "title");
        livrosFiltrados = livrosFiltrados.concat(FiltrarVetor(livros, valorFiltro, "description")) 
        AdicionarLivrosNaTabela(livrosFiltrados)
    }
    else
    {
        Iniciar()
    }
}