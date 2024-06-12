<template>
  <navbar /> 
  <router-view></router-view>
  <Footer />
</template>

<script>
import navbar from './components/layouts/navbar.vue'
import Footer from './components/layouts/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    Footer
  }
}
</script>
