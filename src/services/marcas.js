import axios from "axios";

class MarcasService {
    async buscarMarcas() {
        const { data } = await axios.get("/marcas/");
        return data.results;
    }
  
    async editarMarca(marca) {
        const { data } = await axios.patch(`/marcas/${marca.id}/`, marca);
        return data.results;
    }

    async adicionarMarca(marca) {
        const { data } = await axios.post(`/marcas/`, marca);
        return data.results;
    }

    async removerMarca(id) {
        const { data } = await axios.delete(`/marcas/${id}/`);
        return data.results;
    }
}

export default new MarcasService();
