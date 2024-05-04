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