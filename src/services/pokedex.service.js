import  Api from '@/services/Api'
import axios from 'axios'

export default {
    getOne(namePokemon) {
        return Api().get(`/${namePokemon}`)
    },
    getAll(offset, limit){
        return Api().get(`?offset=${offset}&limit=${limit}`)
    },
    getUrl(urlRecebida){
        return axios.create({
            baseURL: `${urlRecebida}`
        }).get()
    }
}