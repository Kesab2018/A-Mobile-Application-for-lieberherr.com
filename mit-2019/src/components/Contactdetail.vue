<template>
<div id="Contactdetail">
<div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>

<div>
<b-container class="news_holder">
  <b-row>
    <b-col>
        
        <img class ="news_detail_img" alt="Carousel Image" src="./assets/two.jpg">
            </b-col>

             <b-col cols="12"  class="news-element">
                 <hr>
        
                 <p>
                       {{items.Name | capitalize}}
                      
                     
                     </p>
                     <p>
                         {{items.Location | capitalize}}

                          </p>

                          <p><a :href="`mailto:${items.email}`"> {{items.email | capitalize}}</a></p>

                          <p><a :href="`tel:${items.phonenumber}`"> {{items.phonenumber}} </a></p>
            </b-col>

            
            
    
  </b-row>
</b-container>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Contactdetail',
    data(){
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
axios.get('http://localhost:3000/contacts/'+ this.id)
.then(response => (this.items = response.data))
}
}

</script>



<style scoped>
#Contactdetail{
    margin-bottom: 60px;
    margin-top: 60px;
           text-align: justify;
}
.back_btn_holder{
    width: 100%;

        margin-top: 3px;
    margin-bottom: 3px;
    text-align: left;
}
.back_btn{
    height: 30px;
    margin-left: 15px;
}
.news_detail_img{

    width: 100%;
    height: 280px;
}
.news_holder{
    margin-top: 10px;
}
</style>