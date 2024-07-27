<script setup>
import { onMounted, ref } from 'vue'
import { useGaragemStore } from '@/stores/garagem'
import { useUploaderStore } from '@/stores/uploader';

const storeGaragem = useGaragemStore()
const uploaderStore = useUploaderStore();

const file = ref(null);
const defaultVeiculo = {
  id: null,
  ano: null,
  preco: null,
  modelo: null,
  cor: null,
  acessorios: null,
  foto_veiculo_attachment_key: null
}
const veiculo = ref({...defaultVeiculo})

async function salvar() {
  veiculo.value.foto_veiculo_attachment_key = await uploaderStore.uploadImage(file.value);
  if (veiculo.value.id) {
    await storeGaragem.editarVeiculo(veiculo.value);
  } else {
    await storeGaragem.adicionarVeiculo(veiculo.value)
  }

  veiculo.value = {...defaultVeiculo}
}

async function excluir(id) {
  await storeGaragem.removerVeiculo(id)
}

async function editar(item) {
  veiculo.value = {
    ...item,
    modelo: item.modelo.id,
    cor: item.cor.id,
    acessorios: item.acessorios.map(i => i.id)
  }
}

const uploadImage = (e) => {
  file.value = e.target.files[0];
};

onMounted(async () => {
  await storeGaragem.buscarVeiculos();
  await storeGaragem.buscarModelos();
  await storeGaragem.buscarCores();
  await storeGaragem.buscarAcessorios();
})
</script>

<template>
  <section>
    <h1>Veiculos</h1>

    <div class="form">
      <div class="input">
        <p>Ano</p>
        <input type="number" v-model="veiculo.ano" />
      </div>

      <div class="input">
        <p>Preco</p>
        <input type="number" v-model="veiculo.preco" />
      </div>

      <div class="input">
        <p>
          Modelo
        </p>

        <select v-model="veiculo.modelo">
          <option v-for="modelo in storeGaragem.modelos" :key="modelo.id" :value="modelo.id">{{ modelo.nome }}</option>
        </select>
      </div>

      <div class="input">
        <p>
          Cor
        </p>

        <select v-model="veiculo.cor">
          <option v-for="cor in storeGaragem.cores" :key="cor.id" :value="cor.id">{{ cor.nome }}</option>
        </select>
      </div>

      <div class="input">
        <p>
          Acessorios
        </p>

        <select v-model="veiculo.acessorios" multiple>
          <option v-for="acessorio in storeGaragem.acessorios" :key="acessorio.id" :value="acessorio.id">{{ acessorio.descricao }}</option>
        </select>
      </div>

      <div class="input">
        <p>Foto</p>
        <input type="file" id="image" @change="uploadImage" />
      </div>

      <button class="salvarButton" @click="salvar">Salvar</button>
    </div>

    <div class="list">
      <div class="veiculo" v-for="item in storeGaragem.veiculos" :key="item.id">
        <p @click="editar(item)">({{ item.id }}) - {{ item.modelo.nome }} - {{ item.preco }}</p>

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

.input input[type="text"], .input input[type="number"], .input input[type="file"], .input select {
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

.veiculo {
  display: flex;
  gap: 10px;
  background-color: #007bff50;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
}

.veiculo p {
  min-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.veiculo span {
  cursor: pointer;
}
</style>
