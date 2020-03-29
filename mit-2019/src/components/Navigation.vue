<template>
<div id="Navigation">
<table class="nav_main">
<tr>
  <td width="20%"> <router-link :to="`/${$i18n.locale}/login`"><img src="./assets/account_icon.png" class="nav_img"></router-link></td>
    <td width="60%"><router-link :to="`/${$i18n.locale}/`"> <img src="./assets/logo.png" class="nav_logo"></router-link></td>
      <td width="20%"> 
      <div class="change_lang">

    <select v-model="$i18n.locale" class="localechanger">
      <option  :key="`Lang${'de'}`" :value="'de'"> DE</option>
      <option  :key="`Lang${'en'}`" :value="'en'"> EN</option>
    </select>

      </div>

      </td>
</tr>

</table>
</div>
</template>

<script>
export default {
    name: 'Navigation',
     data () {
    return { langs: ['en', 'de'] }
  }
  
    
}
</script>

<style scoped>
#Navigation{
  position: fixed;
  top: 0;
    width: 100%;
}
.nav_main{
  width: 100%;
    text-align: center;
    background-color: #fdc400;
    height: 55px;
}
.nav_img{
height: 45px;
}
.nav_logo{
  margin-top: 10px; 
  height: 35px;
}
.change_lang{
  padding-top: 10px;
  width: 45px;
  height: 45px;
  background-color: white;
  margin-left: 20%;
  border-radius: 50%;
}
.change_lang{
  padding-top: 10px;
  width: 45px;
  height: 45px;
  background-color: white;
  margin-left: 20%;
  border-radius: 50%;
}
.localechanger{
  max-width: 100%;
  background: none;
  border: none;
  text-align: center;
  outline: none;
}
</style>