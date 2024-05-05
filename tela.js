export async function AdicionarLivrosNaTabela(livros) {
    // Construir tbody com os livros
    let divTableBody = document.getElementById("livros");
    let livrosTableBody = ""

    livros.forEach(livro => {
        livrosTableBody +=
        `<tr>
            <td> ${ livro.title } </td>
            <td> ${ livro.description } </td>
        </tr>`
    });
    divTableBody.innerHTML = livrosTableBody;
}

function AlteraHtmlDivResultado(retornoPost,cor){
    let divResultado = document.getElementById("resultado");
    divResultado.innerText = retornoPost;
    divResultado.style.display = "block"
    divResultado.style.backgroundColor = cor
}

export function ExibeResultadoCadastro(retornoPost,validacaoResponse){
    if(validacaoResponse)
    {
        AlteraHtmlDivResultado(retornoPost,"#D3455B");
    }
    else
    {
        AlteraHtmlDivResultado(retornoPost,"#1AAE9F");
    }
}