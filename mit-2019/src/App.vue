<template>
  <div id="app">



    <router-view></router-view>
        <Navigation></Navigation>
    <BottomNav></BottomNav>

    
    


  </div>
</template>

<script>

import Navigation from "./components/Navigation.vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  name: 'app',
  components: {

    Navigation,
    BottomNav,


  }
}
</script>

<style>

body{
  background-color: #FDC400;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0px;
    background-color: #ffffff;
}
</style>
