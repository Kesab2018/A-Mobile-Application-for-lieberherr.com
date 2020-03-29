<template>
<div>
<table class="nav_main">
<tr>
  <td> <router-link :to="`/${$i18n.locale}/`"><img src="./assets/home.png" class="nav_img"></router-link> </td>
    <td>  <router-link :to="`/${$i18n.locale}/product`"> <img src="./assets/prod.png" class="nav_img"></router-link></td>
      <td> <router-link :to="`/${$i18n.locale}/contact`">  <img src="./assets/contact_icon.png" class="nav_img"></router-link></td>
      <td> <router-link :to="`/${$i18n.locale}/help`"> <img src="./assets/help_icon.png" class="nav_img"></router-link></td>
      <td> <router-link :to="`/${$i18n.locale}/chat`"> <img src="./assets/chat_img.png" class="nav_img"></router-link></td>
</tr>

</table>
</div>
</template>

<script>
export default {
    name: 'BottomNav'
}
</script>

<style scoped>
.nav_main{
    position: fixed;
    bottom: 0;
  width: 100%;
    text-align: center;
    background-color: #fdc400;
    height: 55px;
}
.nav_img{
height: 45px;
}

</style>