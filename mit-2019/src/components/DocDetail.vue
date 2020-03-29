<template>
<div id="DocDetail">
    
<div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>
<div>
<b-container class="news_holder">
  <b-row>



    <b-col cols="12">
            </b-col>

             <b-col cols="12"  class="news-element" >
                 <hr>
                 <span style="font-weight: bold;">Author: {{items.Author}} </span>
                 <hr>
                 <p style="font-weight: bold; margin-top:10px;">
                     {{items.Problem}}
                    
                     </p>
                    <p style="text-align: right;">
                     <span></span>
                     
                     </p>
                     <hr>
                     <p>
                        {{items.Solution}}

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
    name: 'DocDetail',
    
    data() {
    return{
        id: this.$route.params.id,
        prod: this.$route.params.prod,
        items: [],
    }
    },

    methods: {
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/documentations/'+ this.id)
.then(response => (this.items = response.data))
}


}


</script>



<style scoped>
#DocDetail{
    margin-bottom: 70px;
    margin-top: 70px;
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