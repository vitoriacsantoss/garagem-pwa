import axios from "axios";

class CategoriasService {
    async buscarCategorias() {
        const { data } = await axios.get("/categorias/");
        return data.results;
    }
  
    async editarCategoria(categoria) {
        const { data } = await axios.patch(`/categorias/${categoria.id}/`, categoria);
        return data.results;
    }

    async adicionarCategoria(categoria) {
        const { data } = await axios.post(`/categorias/`, categoria);
        return data.results;
    }

    async removerCategoria(id) {
        const { data } = await axios.delete(`/categorias/${id}/`);
        return data.results;
    }
}

export default new CategoriasService();
