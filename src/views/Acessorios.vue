<script setup></script>

<template>
  <section>
    <h1>Acessorios</h1>

    <div class="form">
      <div class="input">
        <p>Descricao</p>
        <input type="text" />
      </div>

      <button class="salvarButton">
        Salvar
      </button>
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
    background-color: #007BFF;
    color: white;              
    border: none;             
    border-radius: 4px;      
    padding: 10px 20px;        
    font-size: 16px;         
    cursor: pointer;      
    display: inline-block;
}
</style>
