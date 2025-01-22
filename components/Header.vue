<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
<template>
<div class=header>
  <v-container class="content" :style="{ maxWidth: '1536px' }">
    <img src="/images/logo-branco.png" alt="IG Geotecnologia" height="80" class="logo"/>
    <div>
      <NuxtLink to="/" class="nav">Home</NuxtLink>
      <NuxtLink class="nav" @click.prevent="scrollToSection('about')">Sobre nós</NuxtLink>
      <NuxtLink class="nav" @click.prevent="scrollToSection('service')">O que fazemos </NuxtLink>
      <NuxtLink class="nav" @click.prevent="scrollToSection('contact')">Contato </NuxtLink>
    </div>
  </v-container>
</div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-right: 1rem;
}

.nav {
  font-size: 1.25rem;
  margin-right: 1rem;
  color:  #fff;
}

.sub-nav {
  color: #a07e40;
}
</style>