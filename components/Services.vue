<template>
  <div class="content ">
    <v-container :style="{ maxWidth: '1536px' }" class="pa-4">
      <h1 class="title">O que fazemos:</h1>
      <p class="subtitle">Somos Especialista em Cadastro Territorial Rural e Urbano</p>
      <div class="wrapper">
        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/cadastro-territorial-rural.png"
            cover
          >
            <v-card-title class="card-title">Cadastro Territorial Rural/Certificação</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span> Georeferenciamento de imóveis rurais</div>
            <div class="items"><span class="neon-bar"></span> Certificação de Imóveis Rurais junto ao INCRA (SIGEF)</div>
            <div class="items"><span class="neon-bar"></span> Cadastros Territoriais Rurais</div>
            <div class="items"><span class="neon-bar"></span> Desmembramento e Remebramento</div>
            <div class="items"><span class="neon-bar"></span> Análise de Risco na compra e Venda de Imóveis Rurais</div>
            <div class="items"><span class="neon-bar"></span> Acompanhamento e Legalização Junto aos cartórios</div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/cadastro-territorial-urbano.png"
            cover
          >
            <v-card-title class="card-title">Cadastro Territorial Urbano</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span>REURB( Regularização Fundiária Urbana )</div>
            <div class="items"><span class="neon-bar"></span> Retificação de Área</div>
            <div class="items"><span class="neon-bar"></span> Desmembramento e Unificação</div>
            <div class="items"><span class="neon-bar"></span> Cadastros e Georreferenciamento Urbano</div>
            <div class="items"><span class="neon-bar"></span> Mapeamentos Para tributação ( IPTU )</div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/geoprocessamento.jpeg"
            cover
          >
            <v-card-title class="card-title">Geoprocessamento/Cartografia</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span> Geoprocessamento Aplicado ao Meio Ambiente</div>
            <div class="items"><span class="neon-bar"></span>  Geoprocessamento Aplicado ao Urbanismo e Planejamento</div>
            <div class="items"><span class="neon-bar"></span> Geoprocessamento Aplicado a Mineração</div>
            <div class="items"><span class="neon-bar"></span> Geoprocessamento Para Análises Imobiliárias</div>
            <div class="items"><span class="neon-bar"></span> Mapeamento de áreas para credito de carbono</div>
            <div class="items"><span class="neon-bar"></span> Criação de Banco de Dados</div>
            <div class="items"><span class="neon-bar"></span> Produção de Mapas Temáticos</div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/mapeamento-drones.png"
            cover
          >
            <v-card-title class="card-title">Mapeamento com Drones</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span> Filmagens Aéreas Técnicas</div>
            <div class="items"><span class="neon-bar"></span>  Cálculo de Volume</div>
            <div class="items"><span class="neon-bar"></span> Topografia do Terreno </div>
            <div class="items"><span class="neon-bar"></span> Ortofoto</div>
            <div class="items"><span class="neon-bar"></span> Vetorização das feições cartográficas de interesse</div>
            <div class="items"><span class="neon-bar"></span> Modelo Digital de Terreno</div>
            <div class="items"><span class="neon-bar"></span> Modelo Digital de Superfície</div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/agricultura-precisao.png"
            cover
          >
            <v-card-title class="card-title">Projetos de Agricultura de Precisão</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span> Linhas de Plantio</div>
            <div class="items"><span class="neon-bar"></span>  Curva de Nível</div>
            <div class="items"><span class="neon-bar"></span> Mapa de Produtividade E taxa Variável</div>
            <div class="items"><span class="neon-bar"></span> Analise de índice de vegetação – NDVI</div>
            <div class="items"><span class="neon-bar"></span> Amostragem e Análise de Solo</div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto card"
          width="400"
          max-width="300"
          height="500"
        >
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/dados.jpg"
            cover
          >
            <v-card-title class="card-title">Ciência de Dados</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items"><span class="neon-bar"></span> Análise de dados</div>
            <div class="items"><span class="neon-bar"></span>  Criação de Dashboard</div>
            <div class="items"><span class="neon-bar"></span> Transformação de dados em insights estratégicos</div>
            <div class="items"><span class="neon-bar"></span> Business Intelligence - BI </div>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.content {
  background-color: rgb(15, 28, 21);
}

.title {
  text-align: center;
  font-size: 3.75rem;
}

.subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0 3rem;
  color: rgb(172, 239, 117)
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.v-card {
  background-color: rgb(22, 40, 31);
}

.card {
  overflow: hidden;
}

.hover-zoom-image {
  transition: transform 0.3s ease-in-out;
}

.card:hover .hover-zoom-image {
  transform: scale(1.1);
}

.card-title {
  font-size: 1rem;
  text-wrap: inherit;
}

.card-text { 
  color: #fff;
}

.items {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px;
}

.neon-bar {
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: #ACEF75;
  box-shadow: 0 0 5px #ACEF75, 0 0 10px #ACEF75, 0 0 20px #ACEF75;
}

@media (max-width: 1200px) {
  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .v-card {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .wrapper {
    grid-template-columns: 1fr;
  }

  .v-card {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>