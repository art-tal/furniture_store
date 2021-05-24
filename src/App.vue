<template>
  <div id="body">
    <header-app/>
    <router-view />

    <footer-app/>
  </div>

</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    headerApp: Header,
    footerApp: Footer,
  },
}



</script>

<style lang="scss">
#app {

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
