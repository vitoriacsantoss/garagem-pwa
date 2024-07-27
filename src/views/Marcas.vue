<script setup>
import { onMounted, ref } from 'vue'
import { useGaragemStore } from '@/stores/garagem'

const storeGaragem = useGaragemStore()

const defaultMarca = {
  id: null,
  nome: null,
  nacionalidade: null
}
const marca = ref({...defaultMarca})

async function salvar() {
  if (marca.value.id) {
    await storeGaragem.editarMarca(marca.value);
  } else {
    await storeGaragem.adicionarMarca(marca.value)
  }

  marca.value = {...defaultMarca}
}

async function excluir(id) {
  await storeGaragem.removerMarca(id)
  if (id == marca.value.id) {
    marca.value.id = null
  }
}

onMounted(async () => {
  await storeGaragem.buscarMarcas()
})
</script>

<template>
  <section>
    <h1>Marcas</h1>

    <div class="form">
      <div class="input">
        <p>Nome</p>
        <input type="text" v-model="marca.nome" />
      </div>

      <div class="input">
        <p>Nacionalidade</p>
        <input type="text" v-model="marca.nacionalidade" />
      </div>

      <button class="salvarButton" @click="salvar">Salvar</button>
    </div>

    <div class="list">
      <div class="marca" v-for="item in storeGaragem.marcas" :key="item.id">
        <p @click="marca = item">({{ item.id }}) - {{ item.nome }} - {{ item.nacionalidade }}</p>

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
}

.input input {
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

.marca {
  display: flex;
  gap: 10px;
  background-color: #007bff50;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}

.marca p {
  min-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.marca span {
  cursor: pointer;
}
</style>
