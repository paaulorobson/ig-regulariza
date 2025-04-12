<script setup lang="ts">
import Meteorology from './Meteorology.vue';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
<template>
<div class=header>
  <v-container :style="{ maxWidth: '1536px' }">
    <div class="time">
      <Meteorology/>
    </div>
    <div class="content">
      <img src="/images/logo-ig.svg" alt="IG Geotecnologia" class="logo"/>
      <div>
        <NuxtLink class="nav" @click.prevent="scrollToSection('home')">Home</NuxtLink>
        <NuxtLink class="nav" @click.prevent="scrollToSection('about')">Sobre nós</NuxtLink>
        <NuxtLink class="nav" @click.prevent="scrollToSection('service')">O que fazemos </NuxtLink>
        <NuxtLink class="nav" @click.prevent="scrollToSection('contact')">Contato </NuxtLink>
      </div>
    </div>
  </v-container>
</div>
</template>

<style scoped>
.header {
  background-color: rgb(15, 28, 21);
  position: sticky;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  z-index: 9999;
}

.time {
  display: grid;
  justify-content: start;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  height: auto;
  max-height: 80px;
}

.nav {
  font-size: 1.25rem;
  margin-right: 1rem;
  color:  #fff;
}

.sub-nav {
  color: #a07e40;
}

@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 1rem;
  }

  .content {
    flex-direction: column;
    align-items: center;
    text-align: center; 
  }

  .nav {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  .logo {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .nav {
    font-size: 0.875rem;
    margin: 0 5px;
  }

  .logo {
    max-height: 60px;
  }
}
</style>