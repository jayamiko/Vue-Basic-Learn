<script setup>
import { RouterLink } from 'vue-router'

const routes = [
  {
    idx: 1,
    name: 'declarative-rendering'
  },
  {
    idx: 2,
    name: 'directives'
  }
]
</script>

<template>
  <div class="container">
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <h1>Vue 3 Leaning</h1>
    </header>

    <br />

    <ul>
      <li class="list" v-for="route in routes" :key="route.idx">
        <RouterLink :to="{ path: `/${route.name}`, params: { name: route.name } }">{{
          route.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1 {
  font-size: 80px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.list {
  font-size: 20px;
  font-style: italic;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
