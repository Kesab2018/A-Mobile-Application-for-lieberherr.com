<template>
<div id="home">
<div class="holder">
<!-- <img class ="carousel-img" alt="Carousel Image" src="./assets/two.jpg"> -->


<div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="45%"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide class="carousel-img"
        img-src="https://c4.wallpaperflare.com/wallpaper/646/390/409/142339-282-liebherr-wallpaper-preview.jpg"
      ></b-carousel-slide>


      <b-carousel-slide class="carousel-img" img-src="https://www.liebherr.com/external/products/products-assets/248290/IMG_1200x1200/liebherr-hs-895-HD-seilbagger-crawler-crane-hydraulic-dragline-3.jpg"
      >
      </b-carousel-slide>
      
      <b-carousel-slide class="carousel-img" img-src="https://www.spbgasu.ru/upload-files/news/042019/LIEBHERR.jpeg"></b-carousel-slide>
    </b-carousel>
  
  </div>















<b-container v-if="$t('lang.var')=='en'">
  <b-row  v-for="item in items" :key="item._id">
    <b-col cols="12"  class="news-element">
        <hr>
        <b-row>
            <b-col cols="6">
       <router-link :to="`/${$i18n.locale}/newsdetail/${item._id}`"> <img class ="news-img" alt="Carousel Image" :src="`${item.img}`">
       </router-link>
            </b-col>
            <b-col cols = "6" class="news_content">
                {{ item.entopic }}
            </b-col>
        </b-row>
    </b-col>
  </b-row>
</b-container>





<b-container v-else-if="$t('lang.var')=='de'">
  <b-row  v-for="item in items" :key="item._id">
    <b-col cols="12"  class="news-element">
        <hr>
        <b-row>
            <b-col cols="6">
       <router-link :to="`/${$i18n.locale}/newsdetail/${item._id}`"> <img class ="news-img" alt="Carousel Image" :src="`${item.img}`">
       </router-link>
            </b-col>
            <b-col cols = "6" class="news_content">
                {{ item.detopic }}
            </b-col>
        </b-row>
    </b-col>
  </b-row>
</b-container>








</div>
</div>
</template>


<script>

import axios from 'axios';


export default {
    name: 'Home',

    data(){
  return{
  items:[],
  }
    },

    methods: {

    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/news')
.then(response => (this.items = response.data))
}
}
</script>

<style scoped>
#home{
    margin-top: 70px;
    margin-bottom: 70px;
}
.holder{
    margin-top: 10px;
}
.carousel-img{
    min-width: 100%;
    max-width: 100%;
    min-height: 250px;
    max-height: 250px;

}
.news-img{
    min-width: 100%;
    max-width: 100%;
    min-height: 120px;
    max-height: 120px;

}
.news_content{
    text-align: left;
    hyphens: auto;
    font-weight: bold;
}
</style>