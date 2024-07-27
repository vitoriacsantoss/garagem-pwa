<script setup>
import { onMounted, ref } from 'vue'
import { useGaragemStore } from '@/stores/garagem'

const storeGaragem = useGaragemStore()

const defaultCategoria = {
  id: null,
  descricao: null
}
const categoria = ref({...defaultCategoria})

async function salvar() {
  if (categoria.value.id) {
    await storeGaragem.editarCategoria(categoria.value);
  } else {
    await storeGaragem.adicionarCategoria(categoria.value)
  }

  categoria.value = {...defaultCategoria}
}

async function excluir(id) {
  await storeGaragem.removerCategoria(id)
}

onMounted(async () => {
  await storeGaragem.buscarCategorias()
})
</script>

<template>
  <section>
    <h1>Categorias</h1>

    <div class="form">
      <div class="input">
        <p>Descricao</p>
        <input type="text" v-model="categoria.descricao" />
      </div>

      <button class="salvarButton" @click="salvar">Salvar</button>
    </div>

    <div class="list">
      <div class="categoria" v-for="item in storeGaragem.categorias" :key="item.id">
        <p @click="categoria = item">({{ item.id }}) - {{ item.descricao }}</p>

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

.categoria {
  display: flex;
  gap: 10px;
  background-color: #007bff50;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}

.categoria p {
  min-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.categoria span {
  cursor: pointer;
}
</style>
