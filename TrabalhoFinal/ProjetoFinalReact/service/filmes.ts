import { api } from "./api"

export const getProdutos= (buscaFilme)=> {
    const url = `/?t=${buscaFilme}&apikey=25449371&`
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}

