export function FiltrarVetor(listaOriginal, valorDeBusca, propriedade) {
    if(propriedade == "title")
    {
        return listaOriginal.filter((objeto) => objeto.title.includes(valorDeBusca));
    }
    else
    {
        return listaOriginal.filter((objeto) => objeto.description.includes(valorDeBusca));
    }
}