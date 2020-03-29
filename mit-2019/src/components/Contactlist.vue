<template>

  <div id="Contactlist">
        
    <div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>



<b-container>
  <b-row  v-for="item in items" :key="item._id">
    <b-col cols="12"  class="news-element">
        <hr>
        <b-row>
            <b-col cols="6">
       <router-link :to="`/${$i18n.locale}/contactdetail/${item._id}`"><img class ="news-img" alt="Carousel Image" src="./assets/two.jpg">
       </router-link>
            </b-col>
            <b-col cols = "6" class="news_content">
                {{ item.Name  | capitalize}}
                <p>{{item.Location  | capitalize}}</p>
                <p>{{item.phonenumber}}</p>
            
            </b-col>
        </b-row>
    </b-col>
  </b-row>
</b-container>


  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Contactlist',
  data(){
      return{
        searchquery: this.$route.params.searchquery,
        items: [],
      }
  },
      methods: {
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/contactsearch/'+this.searchquery)
.then(response => (this.items = response.data))
}
    
 
}
</script>

<style scoped>
#Contactlist{
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
    margin-left: 15px;
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