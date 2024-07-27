<script setup>
import { onMounted, ref } from 'vue'
import { useGaragemStore } from '@/stores/garagem'

const storeGaragem = useGaragemStore()

const defaultAcessorio = {
  id: null,
  descricao: null
}
const acessorio = ref({...defaultAcessorio})

async function salvar() {
  if (acessorio.value.id) {
    await storeGaragem.editarAcessorio(acessorio.value);
  } else {
    await storeGaragem.adicionarAcessorio(acessorio.value)
  }

  acessorio.value = {...defaultAcessorio}
}

async function excluir(id) {
  await storeGaragem.removerAcessorio(id)
}

onMounted(async () => {
  await storeGaragem.buscarAcessorios()
  console.log(storeGaragem.acessorios)
})
</script>

<template>
  <section>
    <h1>Acessorios</h1>

    <div class="form">
      <div class="input">
        <p>Descricao</p>
        <input type="text" v-model="acessorio.descricao" />
      </div>

      <button class="salvarButton" @click="salvar">Salvar</button>
    </div>

    <div class="list">
      <div class="acessorio" v-for="item in storeGaragem.acessorios" :key="item.id">
        <p @click="acessorio = item">({{ item.id }}) - {{ item.descricao }}</p>

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

.acessorio {
  display: flex;
  gap: 10px;
  background-color: #007bff50;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}

.acessorio p {
  min-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.acessorio span {
  cursor: pointer;
}
</style>
