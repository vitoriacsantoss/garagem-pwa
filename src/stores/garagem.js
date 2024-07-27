import { ref } from 'vue'
import { defineStore } from 'pinia'

import acessoriosService from '@/services/acessorios'
import veiculosService from '@/services/veiculos'
import modelosService from '@/services/modelos'
import categoriasService from '@/services/categorias'
import coresService from '@/services/cores'
import marcasService from '@/services/marcas'

export const useGaragemStore = defineStore('garagem', () => {
  const veiculos = ref([])
  const modelos = ref([])
  const acessorios = ref([])
  const categorias = ref([])
  const cores = ref([])
  const marcas = ref([])

  async function buscarVeiculos() {
    const data = await veiculosService.buscarVeiculos()
    veiculos.value = data
  }

  async function editarVeiculo(veiculo) {
    await veiculosService.editarVeiculo(veiculo)
    await buscarVeiculos()
  }

  async function adicionarVeiculo(veiculo) {
    await veiculosService.adicionarVeiculo(veiculo)
    await buscarVeiculos()
  }

  async function removerVeiculo(id) {
    await veiculosService.removerVeiculo(id)
    await buscarVeiculos()
  }

  async function buscarModelos() {
    const data = await modelosService.buscarModelos()
    modelos.value = data
  }

  async function editarModelo(modelo) {
    await modelosService.editarModelo(modelo)
    await buscarModelos()
  }

  async function adicionarModelo(modelo) {
    await modelosService.adicionarModelo(modelo)
    await buscarModelos()
  }

  async function removerModelo(id) {
    await modelosService.removerModelo(id)
    await buscarModelos()
  }

  async function buscarAcessorios() {
    const data = await acessoriosService.buscarAcessorios()
    acessorios.value = data
  }

  async function editarAcessorio(acessorio) {
    await acessoriosService.editarAcessorio(acessorio)
    await buscarAcessorios()
  }

  async function adicionarAcessorio(acessorio) {
    await acessoriosService.adicionarAcessorio(acessorio)
    await buscarAcessorios()
  }

  async function removerAcessorio(id) {
    await acessoriosService.removerAcesserio(id)
    await buscarAcessorios()
  }

  async function buscarCategorias() {
    const data = await categoriasService.buscarCategorias()
    categorias.value = data
  }

  async function editarCategoria(categoria) {
    await categoriasService.editarCategoria(categoria)
    await buscarCategorias()
  }

  async function adicionarCategoria(categoria) {
    await categoriasService.adicionarCategoria(categoria)
    await buscarCategorias()
  }

  async function removerCategoria(id) {
    await categoriasService.removerCategoria(id)
    await buscarCategorias()
  }

  async function buscarCores() {
    const data = await coresService.buscarCores()
    cores.value = data
  }

  async function editarCor(cor) {
    await coresService.editarCor(cor)
    await buscarCores()
  }

  async function adicionarCor(cor) {
    await coresService.adicionarCor(cor)
    await buscarCores()
  }

  async function removerCor(id) {
    await coresService.removerCor(id)
    await buscarCores()
  }

  async function buscarMarcas() {
    const data = await marcasService.buscarMarcas()
    marcas.value = data
  }

  async function editarMarca(marca) {
    await marcasService.editarMarca(marca)
    await buscarMarcas()
  }

  async function adicionarMarca(marca) {
    await marcasService.adicionarMarca(marca)
    await buscarMarcas()
  }

  async function removerMarca(id) {
    await marcasService.removerMarca(id)
    await buscarMarcas()
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
