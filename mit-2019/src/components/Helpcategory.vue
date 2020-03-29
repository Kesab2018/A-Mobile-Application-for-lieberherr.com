<template>

  <div id="Helpcategory">
 <div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>



<b-container v-if="$t('lang.var')=='en'">
  <b-row>
    <b-col cols="12"  class="faq_question" v-for="item in items" :key="item._id">
        <hr>
      <router-link :to="`/${$i18n.locale}/Helpdetail/${item._id}`"> {{item.entopic}} </router-link>
    </b-col>

  </b-row>
</b-container>
<b-container v-else-if="$t('lang.var')=='de'">
  <b-row>
    <b-col cols="12"  class="faq_question" v-for="item in items" :key="item._id">
        <hr>
      <router-link :to="`/${$i18n.locale}/Helpdetail/${item._id}`"> {{item.detopic}} </router-link>
    </b-col>

  </b-row>
</b-container>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Helpcategory',
  data(){
      return{
        category: this.$route.params.category,
        items: [],
      }
  },
      methods: {
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/helpcategory/'+ this.category)
.then(response => (this.items = response.data))
}
  
 
}
</script>

<style scoped>
#Helpcategory{
    margin-bottom: 60px;
        margin-top: 60px;
}

.prod-img{
    min-width: 100%;
    max-width: 100%;
    min-height: 120px;
    max-height: 120px;

}

.prod_btn{
        color: white;
        background-color: #394791;
        border-radius: 40px;
        width: 100px;
        box-shadow: 1px 1px #7e7e7e;
}
.back_btn_holder{
    width: 100%;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: left;
}
.back_btn{
    height: 30px;
    margin-left: 10px;
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