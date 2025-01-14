<template>
  <v-container :style="{ maxWidth: '1536px' }" class="pa-4">
    <div class="content">
      <div class="content-contact">
        <h2 class="title"> Nossos Contatos </h2>
        <div class="contact-items">
          <div class="group">
            <span class="neon-bar"></span>
            <p class="label">Email</p>
            <span>regularizaimoveisrurais@gmail.com</span>
          </div>
          <div class="group">
            <span class="neon-bar"></span>
            <p class="label">Telefone</p>
            <span>(98) 9 8153-6601</span>
          </div>
        </div>
      </div>
      <div class="form-contact">
        <form class="wrapper">
          <div class="item">
            <label for="nome">Nome</label>
            <input type="text" id="nome" class="input"/>
          </div>
          <div class="item">
            <label for="empresa">Empresa</label>
            <input type="text" id="empresa" class="input"/>
          </div>
          <div class="item">
            <label for="telefone">Telefone</label>
            <input type="number" id="telefone" class="input"/>
          </div>
          <div class="item">
            <label for="email">Email</label>
            <input type="email" id="email" class="input"/>
          </div>
          <div class="item">
            <label for="descricao">Escreva aqui sua necessidade...</label>
            <textarea type="textarea" id="descricao" class="input"/>
          </div>
        </form>
      </div>
    </div>

  </v-container>
</template>

<style scoped>

.content { 
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 2.25rem;
  margin: 0 0 1rem;
  color: rgb(172, 239, 117)
}

.contact-items { 
  display: flex;
  flex-direction: column;
}

.neon-bar {
  height: 2px;
  width: 24px;
  background-color: #ACEF75;
  display: inline-block;
  box-shadow: 0 0 5px #ACEF75, 0 0 10px #ACEF75, 0 0 20px #ACEF75;
}

.group {
  margin: 0 0 1rem 0;
}

.label {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(172, 239, 117)
}

.form-contact {
  width: 700px;
  padding: 2rem;
  background-color: rgb(15, 28, 21);
  border-radius: 0.75rem;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.input {
  border-radius: 0.375rem;
  border-width: 2px;
  background-color: rgb(22, 40, 31);
  padding: 0.5rem;
  color: rgb(255, 255, 255);
}
</style>