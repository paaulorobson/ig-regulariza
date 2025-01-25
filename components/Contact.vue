<script setup lang="ts">

const goLinkedin = () => {
  window.open('https://www.linkedin.com/in/ig-geotecnologia-e-regulariza%C3%A7%C3%A3o-de-im%C3%B3veis-rurais-371322318/')
}

</script>
<template>
  <v-container :style="{ maxWidth: '1536px'}" class="pa-0">
    <div class="contact">
      <v-container  class="pa-4">
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
        </div>
      </v-container>
      <v-container class="pa-0">
        <div class="social">
          <h2 class="title"> Redes Sociais </h2>
          <v-btn
            class="social-item"
            icon="mdi-facebook"
            size="x-large"
          ></v-btn>
          <v-btn
            class="social-item"
            icon="mdi-instagram"
            size="x-large"
          ></v-btn>
          <v-btn
            @click.prevent="goLinkedin"
            class="social-item"
            icon="mdi-linkedin"
            size="x-large"
          ></v-btn>
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<style scoped>

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px
}

.content { 
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 2.25rem;
  margin: 0 0 1rem;
  color: rgb(172, 239, 117)
}

.social {
  text-align: center;
  padding: 16px;
  background-color: rgb(15, 28, 21);
  margin: 16px;
  height: 300px;
  border-radius: 8px;
}

.social-item {
  margin: 4px;
  background-color: #16281F;
  color: #ACEF75;
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

@media (max-width: 1200px) {
  .contact {
    grid-template-columns: 1fr;
  }

  .social {
    height: auto;
    padding: 12px;
  }

  .title {
    font-size: 2rem;
  }

  .social-item {
    font-size: 1.5rem;
  }

  .contact-items .group {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.75rem;
  }

  .label {
    font-size: 1.25rem;
  }

  .social-item {
    font-size: 1.25rem;
  }

  .social {
    margin: 8px;
    height: auto;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .label {
    font-size: 1rem;
  }

  .social-item {
    font-size: 1rem;
  }

  .contact-items .group {
    margin-bottom: 0.5rem;
  }
}
</style>