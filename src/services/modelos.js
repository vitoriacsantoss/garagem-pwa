import axios from "axios";

class ModelosService {
    async buscarModelos() {
        const { data } = await axios.get("/modelos/");
        return data.results;
    }
  
    async editarModelo(modelo) {
        const { data } = await axios.patch(`/modelos/${modelo.id}/`, modelo);
        return data.results;
    }

    async adicionarModelo(modelo) {
        const { data } = await axios.post(`/modelos/`, modelo);
        return data.results;
    }

    async removerModelo(id) {
        const { data } = await axios.delete(`/modelos/${id}/`);
        return data.results;
    }
}

export default new ModelosService();
