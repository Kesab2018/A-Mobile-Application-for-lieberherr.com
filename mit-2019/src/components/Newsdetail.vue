<template>
<div id="Newsdetail">
    
<div class="back_btn_holder">
       <router-link :to="`/${$i18n.locale}`"> <img class ="back_btn" src="./assets/back.png"> </router-link>
</div>
<div>
<b-container class="news_holder">
  <b-row>



    <b-col cols="12">
        
        <img class ="news_detail_img" alt="Carousel Image" :src="`${items.img}`">
            </b-col>

             <b-col cols="12"  class="news-element"  v-if="$t('lang.var')=='en'">
                 <hr>
                 <span style="font-weight: bold;">Author: {{items.Author}}</span>
                 <hr>
                 <p style="font-weight: bold; margin-top:10px;">
            
                     {{items.entopic}}
                     </p>
                    <p style="text-align: right;">
                     <span>{{ items.Date | moment("dddd, MMMM Do YYYY") }}</span>
                     
                     </p>
                     <hr>
                     <p>
                         {{items.enmessage}}

                          </p>
            </b-col>

                <b-col cols="12"  class="news-element"  v-if="$t('lang.var')=='de'">
                 <hr>
                 <span style="font-weight: bold;">Author: {{items.Author}}</span>
                 <hr>
                 <p style="font-weight: bold; margin-top:10px;">
            
                     {{items.detopic.toUpperCase()}}
                     </p>
                    <p style="text-align: right;">
                     <span>{{ items.Date | moment("dddd, MMMM Do YYYY") }}</span>
                     
                     </p>
                     <hr>
                     <p>
                         {{items.demessage}}

                          </p>
            </b-col>

            


      
            
    
  </b-row>
</b-container>
</div>
</div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Newsdetail',
    
    data() {
    return{
        id: this.$route.params.id,
        items: [],
    }
    },

    methods: {
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/news/'+ this.id)
.then(response => (this.items = response.data))
}


}


</script>



<style scoped>
#Newsdetail{
    margin-bottom: 60px;
    margin-top: 60px;
           text-align: justify;
           hyphens: auto;
}
.back_btn_holder{
    width: 100%;

        margin-top: 3px;
    margin-bottom: 3px;
}
.back_btn{
    height: 30px;
    margin-left: 5px;
}
.news_detail_img{

    width: 100%;
    height: 280px;
}
.news_holder{
    margin-top: 10px;
}
</style>