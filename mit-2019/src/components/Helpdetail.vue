<template>
<div id="Helpdetail">
    
<div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>
<div>
<b-container class="news_holder">
  <b-row>



    <b-col cols="12">
        
        <img class ="news_detail_img" alt="Carousel Image" src="./assets/two.jpg">
            </b-col>

              <b-col cols="12"  class="news-element"  v-if="$t('lang.var')=='en'">
            
                 <hr>
                 <p style="font-weight: bold; margin-top:10px;">
            
                   {{items.entopic}}
                     </p>
                     <hr>
                    <p style="text-align: right;">
                     <span>  {{ items.enmessage}}</span>
                     
                     </p>
                     <hr>
                     <p>
                      

                          </p>
            </b-col>

                <b-col cols="12"  class="news-element"  v-if="$t('lang.var')=='de'">
            
                 <hr>
                 <p style="font-weight: bold; margin-top:10px;">
            
                   {{items.detopic}}
                     </p>
                     <hr>
                    <p style="text-align: right;">
                     <span>  {{ items.demessage}}</span>
                     
                     </p>
                     <hr>
                     <p>
                      

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
    name: 'Helpdetail',
    
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
axios.get('http://localhost:3000/gethelp/'+ this.id)
.then(response => (this.items = response.data))
}


}


</script>



<style scoped>
#Helpdetail{
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