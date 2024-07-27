<script setup>
import { useGaragemStore } from '@/stores/garagem';
import { onMounted } from 'vue';

const storeGaragem = useGaragemStore();

onMounted(async () => {
  await storeGaragem.buscarVeiculos()
} )
</script>

<template>
  <main>
    <h2 v-if="storeGaragem.veiculos.length == 0">
      Nenhum veiculo disponivel
    </h2>
    <div class="list">
      <div class="veiculo" v-for="item in storeGaragem.veiculos" :key="item.id">
        <img :src="item?.foto_veiculo?.url" alt="" width="200px">
        <p>({{ item.id }}) - {{ item.modelo.nome }} - {{ item.cor.nome }}</p>
        <p>Ano: {{ item.ano }} - R$ {{ item.preco }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped >

main {
  padding: 10px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}

.veiculo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
