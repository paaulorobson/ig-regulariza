<template>
  <div class="content">
    <v-container :style="{ maxWidth: '1536px' }" class="pa-4">
      <h1 class="title">O que fazemos</h1>
      <p class="subtitle">
        Somos Especialista em Cadastro Territorial Rural e Urbano
      </p>
      <div class="wrapper">
        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/cadastro-territorial-rural.png"
            cover
          >
            <v-card-title class="card-title">Mercado Rural</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span>
              <div>Cadastros Rurais</div>
            </div>
            <div class="items">
              <span class="neon-bar"></span> Georreferenciamento e Certificação
              (INCRA)
            </div>
            <div class="items">
              <span class="neon-bar"></span> Retificação de Áreas
            </div>
            <div class="items">
              <span class="neon-bar"></span> Desmembramento e Remebramentos
            </div>
            <div class="items">
              <span class="neon-bar"></span> Análise de Risco na compra e Venda
              de Imóveis Rurais
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/cadastro-territorial-urbano.png"
            cover
          >
            <v-card-title class="card-title">Mercado Urbano</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span>Regularização Fundiária Urbana
            </div>
            <div class="items">
              <span class="neon-bar"></span> Georreferenciamento de Imóveis
              Urbanos
            </div>
            <div class="items">
              <span class="neon-bar"></span> Retificação e Unificação de Áreas
            </div>
            <div class="items">
              <span class="neon-bar"></span> Atualização Cadastral para Registro
              Imobiliário
            </div>
            <div class="items">
              <span class="neon-bar"></span> Mapeamento Urbano e Cadastro
              Técnico Multifinalitário
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/mapeamento-drones.png"
            cover
          >
            <v-card-title class="card-title"
              >Geotecnologias e Drones</v-card-title
            >
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span> Mapeamento Aéreo com Drones
            </div>
            <div class="items">
              <span class="neon-bar"></span> Ortofotos e Cartografia de Precisão
            </div>
            <div class="items">
              <span class="neon-bar"></span> Topografia do Terreno
            </div>
            <div class="items">
              <span class="neon-bar"></span> Modelos Digitais de Superfície
              (MDS) e de Terreno (MDT)
            </div>
            <div class="items">
              <span class="neon-bar"></span> Vetorização e Interpretação
              Cartográfica
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/sustentabilidade.jpg"
            cover
          >
            <v-card-title class="card-title">Sustentabilidade</v-card-title>
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span> Gestão Territorial e Diagnóstico
              Ambiental para Projetos de Carbono
            </div>
            <div class="items">
              <span class="neon-bar"></span> Due Diligence Ambiental para
              Negócios e Empreendimentos
            </div>
            <div class="items">
              <span class="neon-bar"></span> Compliance Ambiental Preventivo
            </div>
            <div class="items">
              <span class="neon-bar"></span> Inteligência Territorial para
              Planejamento Ambiental
            </div>
            <div class="items">
              <span class="neon-bar"></span> Capacitação e Mentorias Ambientais
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/geoprocessamento.jpeg"
            cover
          >
            <v-card-title class="card-title"
              >Geoprocessamento Aplicado a Setores Econômicos</v-card-title
            >
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span> Urbanismo e Planejamento
            </div>
            <div class="items"><span class="neon-bar"></span> Mineração</div>
            <div class="items">
              <span class="neon-bar"></span> Agricultura e Florestas
            </div>
            <div class="items">
              <span class="neon-bar"></span> Produção de mapas temáticos
            </div>
            <div class="items">
              <span class="neon-bar"></span> Due Diligence Geoespacial
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto card" width="400" max-width="300" height="350">
          <v-img
            class="align-end text-white hover-zoom-image"
            height="150"
            gradient="to top right, rgba(172, 239, 117,.33), rgba(25,32,72,.7)"
            src="/images/dados.jpg"
            cover
          >
            <v-card-title class="card-title"
              >Análise de Dados e Inteligência Artificial</v-card-title
            >
          </v-img>
          <v-card-text class="card-text">
            <div class="items">
              <span class="neon-bar"></span> Criação e gestão de bancos de dados
              espaciais
            </div>
            <div class="items">
              <span class="neon-bar"></span> Dashboards ESG e relatórios para
              empresas
            </div>
            <div class="items">
              <span class="neon-bar"></span> Desenvolvimento de sistemas de
              Gestão Territorial (SIGWeb) personalizados
            </div>
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
  color: rgb(172, 239, 117);
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
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.neon-bar {
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: #acef75;
  box-shadow: 0 0 5px #acef75, 0 0 10px #acef75, 0 0 20px #acef75;
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
