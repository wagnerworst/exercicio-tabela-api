export async function BuscarTodosOsLivros() {
    let livro = await fetch("https://api-aula.up.railway.app/livros");
    return livro.json();
}

export async function postApiLivros(titulo, descricao){
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
    return retornoJson;
}

export function VerificaResponseEhErro(responseJson)
{
    switch (responseJson) {
        case "Título é obrigatório!":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}