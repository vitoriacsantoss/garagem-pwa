import axios from "axios";

class CoresService {
    async buscarCores() {
        const { data } = await axios.get("/cores/");
        return data.results;
    }
  
    async editarCor(cor) {
        const { data } = await axios.patch(`/cores/${cor.id}/`, cor);
        return data.results;
    }

    async adicionarCor(cor) {
        const { data } = await axios.post(`/cores/`, cor);
        return data.results;
    }

    async removerCor(id) {
        const { data } = await axios.delete(`/cores/${id}/`);
        return data.results;
    }
}

export default new CoresService();
