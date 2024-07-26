import axios from "axios";

class VeiculosService {
    async buscarVeiculos() {
        const { data } = await axios.get("/veiculos/");
        return data.results;
    }
  
    async editarVeiculo(veiculo) {
        const { data } = await axios.patch(`/veiculos/${veiculo.id}/`, veiculo);
        return data.results;
    }

    async adicionarVeiculo(veiculo) {
        const { data } = await axios.post(`/veiculos/`, veiculo);
        return data.results;
    }

    async removerVeiculo(id) {
        const { data } = await axios.delete(`/veiculos/${id}/`);
        return data.results;
    }
}

export default new VeiculosService();
