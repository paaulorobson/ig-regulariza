<script setup lang="ts">

const dayOfWeek = new Date().toLocaleDateString('pt-BR', { weekday: 'long'})
const temperature = ref(25)
const loading = ref<boolean>(true); 
const error = ref<string | null>(null); 

const weatherEmoji = computed(() => {
  if(temperature.value >= 25) {
    return '☀️'
  }
  if(temperature.value < 25 && temperature.value >= 15) {
    return '🌤️'
  }
  else {
    return '🌧️'
  }
})

const detectCity = () => {
  if (!navigator.geolocation) {
    error.value = 'Geolocalização não é suportada no seu navegador.';
    loading.value = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchCityFromCoordinates(latitude, longitude);
    },
    (err) => {
      error.value = 'Erro ao obter localização. Verifique as permissões.';
      loading.value = false;
      console.error(err);
    }
  );
};

const fetchCityFromCoordinates = async (latitude: number, longitude: number) => {
  const apiKey = '2d20b2381620de6dce946abb6c677a0b';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do tempo');
    }
    const data = await response.json();
    temperature.value = Math.floor(data.main.temp);
  } catch (err) {
    error.value = 'Erro ao buscar a cidade. Tente novamente.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  detectCity()
})
</script>

<template>
  <div class="weather-container">
    <p v-if="loading">Detectando sua localização...</p>
    <p v-else-if="error">{{ error }}</p>
    <template v-else>
      <p>{{ dayOfWeek }}</p>
      <p>{{ temperature }}°C</p>
      <p>{{ weatherEmoji }}</p>
    </template>
  </div>
</template>


<style scoped>
.weather-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ACEF75;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

.weather-container p {
  background-color: #16281F;
  padding: .7rem;
  border-radius: 8px;
}

</style>