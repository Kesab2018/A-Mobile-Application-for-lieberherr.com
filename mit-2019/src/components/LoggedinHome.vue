<template>
<div id="LoggedinHome">
    <div class="welcome">Welcome Username, </div>
<Search></Search>
<table width="100%">
    <tr>
        <button class="product_category">AREOSPACE</button>
    </tr>

    <tr>
        <button class="product_category">COMPONENTS</button>
    </tr>

    <tr>
        <button class="product_category">MINING</button>
    </tr>

    <tr>
        <button class="product_category">CONSTRUCTION</button>
    </tr>
    
</table>
    </div>
</template>

<script>
import Search from "./Search.vue";


export default {
  name: 'LoggedinHome',
        components: {
    Search,


  }
 
}
</script>

<style scoped>
#LoggedinHome{
    margin-top: 60px;
    margin-bottom: 60px;
}
.product_category{
    margin-top: 20px;
    width: 70%;
    height: 80px;
    background-color: #fdc400;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: white;
    padding: 0px;
}
.category_img{
    float: left;
    margin: 0px;
    padding: 0px;
     min-height: 100%;
    max-height: 100%;
}
.welcome{
text-align: left;
margin-left: 15px;
    margin-top: 120px;
    margin-bottom: 20px;
}
</style>