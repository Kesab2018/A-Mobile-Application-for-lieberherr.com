<template>
<div id="Productdetail">
    
<div class="back_btn_holder">
     <router-link :to="`/${$i18n.locale}/product`"> <img class ="back_btn" src="./assets/back.png"> </router-link>
</div>
<div>
<b-container>
  <b-row>
    <b-col cols="12"  class="product_element">
        
        <img class ="product_detail_img" alt="Carousel Image" :src="`${items.img}`">
            </b-col>

             <b-col cols="12"  class="product_element" v-if="$t('lang.var')=='en'">
        
                 <p>
                     {{items.enname | capitalize}}
                     </p>
                     <p>
                         {{items.endesc}}
                          </p>
                          </b-col>
                    <b-col cols="12"  class="product_element" v-if="$t('lang.var')=='de'">
        
                 <p>
                     {{items.dename  | capitalize}}
                     </p>
                     <p>
                         {{items.dedesc}}
                          </p>
                          </b-col>
            
    
  </b-row>
</b-container>
</div>
<div class="holder">
    
    
<table class="holdertable">
<tr>
<td width="50%"><button class="holderbtn">FIND DEALER</button></td>
<td  width="50%"><button class="holderbtn">GET HELP</button></td>
</tr>
</table>
</div>


<div class="holder">
<table class="holdertable">
<tr>
<td width="50%"><router-link :to="`/${$i18n.locale}/manual/${items._id}`"><button class="holderbtn">MANUAL</button></router-link></td>
<td  width="50%"><router-link :to="`/${$i18n.locale}/documentation/${items._id}`"><button class="holderbtn">DOCUMENTATION</button></router-link></td>
</tr>
<tr>
<td width="50%"><button class="holderbtn">REPAIR GUIDE</button></td>
<td  width="50%"><router-link :to="`/${$i18n.locale}/contactlist/${items.category}`"><button class="holderbtn">CONTACT SUPPORT</button></router-link></td>
</tr>
</table>
</div>
</div>


</template>

<script>
import axios from 'axios';

export default {
    name: 'Productdetail',
    
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
axios.get('http://localhost:3000/products/'+ this.id)
.then(response => (this.items = response.data))
}


}

</script>

<style scoped>
#Productdetail{
    margin-bottom: 60px;
    margin-top: 60px;
           text-align: justify;
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
.product_detail_img{

    width: 100%;
    height: 280px;
}
.product_element{
    margin-top: 5px;
}
.holderbtn{
    margin-top: 15px;
    width: 170px;
    height: 40px;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #ffff;
    background-color: #394791;
    border-radius: 10px;
    border: none;
    outline: none;
    box-shadow: 1px 1px #7e7e7e;
}
.holdertable{
    width: 100%;
    text-align: center;
}

</style>