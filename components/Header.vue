<template>
<div class=header>
  <v-container class="content" :style="{ maxWidth: '1536px' }">
    <img src="/images/logo-branco.png" alt="IG Geotecnologia" height="80" class="logo"/>
    <div>
      <NuxtLink to="/" class="nav">Home</NuxtLink>
      <NuxtLink to="/about" class="nav">Sobre nós</NuxtLink>
      <NuxtLink to="#" class="nav">O que fazemos </NuxtLink>
      <NuxtLink to="#" class="nav">Contato </NuxtLink>
    </div>
  </v-container>
</div>
</template>

<style scoped>
.header {
  /* position: fixed;
  top: 0;
  left: 0; */
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
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