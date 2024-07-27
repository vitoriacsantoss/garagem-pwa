<script setup>
import { onMounted, ref } from 'vue'
import { useGaragemStore } from '@/stores/garagem'

const storeGaragem = useGaragemStore()

const defaultModelo = {
  id: null,
  nome: null,
  marca: null,
  categoria: null
}
const modelo = ref({ ...defaultModelo })

async function salvar() {
  if (modelo.value.id) {
    await storeGaragem.editarModelo(modelo.value)
  } else {
    await storeGaragem.adicionarModelo(modelo.value)
  }

  modelo.value = { ...defaultModelo }
}

async function excluir(id) {
  await storeGaragem.removerModelo(id)
  if (id == modelo.value.id) {
    modelo.value.id = null
  }
}

async function editar(item) {
  modelo.value = {
    ...item,
    marca: item.marca.id,
    categoria: item.categoria.id
  }
}

onMounted(async () => {
  await storeGaragem.buscarModelos()
  await storeGaragem.buscarCategorias()
  await storeGaragem.buscarMarcas()
})
</script>

<template>
  <section>
    <h1>Modelos</h1>

    <div class="form">
      <div class="input">
        <p>Nome</p>
        <input type="text" v-model="modelo.nome" />
      </div>

      <div class="input">
        <p>Marca</p>

        <select v-model="modelo.marca">
          <option v-for="marca in storeGaragem.marcas" :key="marca.id" :value="marca.id">
            {{ marca.nome }}
          </option>
        </select>
      </div>

      <div class="input">
        <p>Categoria</p>

        <select v-model="modelo.categoria">
          <option
            v-for="categoria in storeGaragem.categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.descricao }}
          </option>
        </select>
      </div>

      <button class="salvarButton" @click="salvar">Salvar</button>
    </div>

    <div class="list">
      <div class="modelo" v-for="item in storeGaragem.modelos" :key="item.id">
        <p @click="editar(item)">({{ item.id }}) - {{ item.nome }} - {{ item.marca.nome }} - {{ item.categoria.descricao }}</p>

        <span @click="excluir(item.id)">
          <i class="mdi mdi-close"></i>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  min-width: 250px;
  align-items: center;
}

.input {
  min-width: 200px;
  width: 250px;
}

.input input[type='text'],
.input input[type='number'],
.input input[type='file'],
.input select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Arial, sans-serif;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.salvarButton {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modelo {
  display: flex;
  gap: 10px;
  background-color: #007bff50;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}

.modelo p {
  min-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.modelo span {
  cursor: pointer;
}
</style>
