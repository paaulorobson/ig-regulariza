<template>
<div class=header>
  <v-container class="content">
    <img src="/images/logo-branco.png" alt="IG Geotecnologia" height="80" class="logo"/>
    <NuxtLink to="/" class="nav">Home</NuxtLink>
    <NuxtLink to="/about" class="nav">Sobre nós</NuxtLink>
    
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <span class="nav"  v-bind="props">O que fazemos <v-icon icon="mdi-menu-down"></v-icon></span>
      </template>
      <v-list>
        <v-list-item>
          <NuxtLink to="#" class="sub-nav">Cadastro territorial rural/certificação </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="#" class="sub-nav">Cadastro territorial urbano </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="#" class="sub-nav">Geoprocessamento/cartografia </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="#" class="sub-nav">Mapeamento com Drones </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="#" class="sub-nav">Projetos de Agricultura de Precisão </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
    <NuxtLink to="#" class="nav">Contato </NuxtLink>
  </v-container>
</div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  margin-right: 1rem;
}

.nav {
  font-size: 16px;
  margin-right: 1rem;
  color: #fff;
}

.sub-nav {
  color: #a07e40;
}
</style>