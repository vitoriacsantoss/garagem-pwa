import axios from "axios";

class AcessoriosService {
    async buscarAcessorios() {
        const { data } = await axios.get("/acessorios/");
        return data.results;
    }
  
    async editarAcessorio(acessorio) {
        const { data } = await axios.patch(`/acessorios/${acessorio.id}/`, acessorio);
        return data.results;
    }

    async adicionarAcessorio(acessorio) {
        const { data } = await axios.post(`/acessorios/`, acessorio);
        return data.results;
    }

    async removerAcesserio(id) {
        const { data } = await axios.delete(`/acessorios/${id}/`);
        return data.results;
    }
}

export default new AcessoriosService();