import { api } from "./api"

export const getProdutos= (buscaFilme)=> {
    const url = `/?t=${buscaFilme}&apikey=6d66c40d&`
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}

