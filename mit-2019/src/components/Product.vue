<template>
<div id="Product">


    <div class="search-box">
        <input class="search-txt" type="text" v-bind:placeholder="$t('product.pbar')" required="required" v-model="searchquery">
       <router-link :to="`/${$i18n.locale}/productlist/${searchquery}`">       
           <button class="search-btn" type="button">
       <img class ="search_ico" alt="Search Icon" src="./assets/search-icon.png">
   </button>
   </router-link>
</div>




<table width="100%">
    <tr>
        <router-link :to="`/${$i18n.locale}/productcategory/building_and_constructtion`"><button class="product_category">{{$t('product.BS')}}</button></router-link>
    </tr>

    <tr>
       <router-link :to="`/${$i18n.locale}/productcategory/agriculture`"> <button class="product_category">{{$t('product.AG')}}</button></router-link>
    </tr>

    <tr>
       <router-link :to="`/${$i18n.locale}/productcategory/maritime`"> <button class="product_category">{{$t('product.MA')}}</button></router-link>
    </tr>

    <tr>
      <router-link :to="`/${$i18n.locale}/productcategory/mining`">  <button class="product_category">{{$t('product.MI')}}</button></router-link>
    </tr>

    <tr>
       <router-link :to="`/${$i18n.locale}/productcategory/decentralized_energy`"> <button class="product_category">{{$t('product.DES')}}</button></router-link>
    </tr>

    <tr>
       <router-link :to="`/${$i18n.locale}/productcategory/special_vehicles`"> <button class="product_category">{{$t('product.SV')}}</button></router-link>
    </tr>
    
</table>
    </div>
</template>

<script>


export default {
  name: 'Product',
      data(){
        return{
            searchquery: this.searchquery,
        }
    }
   
}
</script>

<style scoped>
#Product{
    margin-top: 70px;
    margin-bottom: 70px;
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    outline: none;
}
.category_img{
    float: left;
    margin: 0px;
    padding: 0px;
     min-height: 100%;
    max-height: 100%;
}
.search-box {
    margin-top: 10px;
    margin-left: 10%;
    width: 80%;
    background: none;
    border: solid 2px #394791;
    height: 44px;
    padding: 0px;
    background-color: white;
    border-radius: 10px;
}
.search-txt{
    margin: 0px;
    padding: 0px;
    width: 80%;
    min-width: 80%;
    font-size: 16px;
    line-height: 35px;
    border: none;
    outline: none;
}
.search_ico{
    height: 20px;
}
.search-btn{
    padding: 0px;
    border-radius: 50%;
    border: solid 2px #394791;
    margin-right: 3px;
    padding: 4px;
    background: none;
    margin-top: 2px;
    outline: none;
    float: right;
}
</style>