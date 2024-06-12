<template>
  <navbar /> 
  <router-view></router-view>
</template>

<script>
import navbar from './components/layouts/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>
