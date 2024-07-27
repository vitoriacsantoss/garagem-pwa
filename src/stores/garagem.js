import { ref } from 'vue'
import { defineStore } from 'pinia'

import acessoriosService from '@/services/acessorios'

export const useGaragemStore = defineStore('garagem', () => {
  const veiculos = ref([])
  const modelos = ref([])
  const acessorios = ref([])
  const categorias = ref([])
  const cores = ref([])
  const marcas = ref([])

  async function buscarVeiculos() {}

  async function editarVeiculo(veiculo) {}

  async function adicionarVeiculo(veiculo) {}

  async function removerVeiculo(id) {}

  async function buscarModelos() {
  }

  async function editarModelo(modelo) {
  }

  async function adicionarModelo(modelo) {
  }

  async function removerModelo(id) {
  }

  async function buscarAcessorios() {
    const data = await acessoriosService.buscarAcessorios()
    acessorios.value = data;
  }

  async function editarAcessorio(acessorio) {
    await acessoriosService.editarAcessorio(acessorio);
    await buscarAcessorios() 
  }

  async function adicionarAcessorio(acessorio) {
    await acessoriosService.adicionarAcessorio(acessorio);
    await buscarAcessorios()
  }

  async function removerAcessorio(id) {
    await acessoriosService.removerAcesserio(id);
    await buscarAcessorios()
  }

  async function buscarCategorias() {
  }

  async function editarCategoria(categoria) {
  }

  async function adicionarCategoria(categoria) {
  }

  async function removerCategoria(id) {
  }

  async function buscarCores() {
  }

  async function editarCor(cor) {
  }

  async function adicionarCor(cor) {
  }

  async function removerCor(id) {
  }

  async function buscarMarcas() {
  }

  async function editarMarca(marca) {
  }

  async function adicionarMarca(marca) {
  }

  async function removerMarca(id) {
  }

  return {
    veiculos,
    modelos,
    acessorios,
    categorias,
    cores,
    marcas,
    buscarVeiculos,
    editarVeiculo,
    adicionarVeiculo,
    removerVeiculo,
    buscarModelos,
    editarModelo,
    adicionarModelo,
    removerModelo,
    buscarAcessorios,
    editarAcessorio,
    adicionarAcessorio,
    removerAcessorio,
    buscarCategorias,
    editarCategoria,
    adicionarCategoria,
    removerCategoria,
    buscarCores,
    editarCor,
    adicionarCor,
    removerCor,
    buscarMarcas,
    editarMarca,
    adicionarMarca,
    removerMarca
  }
})
