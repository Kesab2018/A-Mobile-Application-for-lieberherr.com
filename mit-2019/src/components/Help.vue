<template>
<div id="Help">

<div class="help_category">

<b-container>
  <b-row>
    <b-col cols="12"  class="contact_element">
        <router-link :to="`/${$i18n.locale}/helpcategory/general`"> <button class="category_box">{{ $t('help.GE') }}</button>
        </router-link>
    </b-col>

    <b-col cols="12"  class="contact_element">
       <router-link :to="`/${$i18n.locale}/helpcategory/app`"> <button class="category_box">{{ $t('help.AU') }}</button>
       </router-link>
    </b-col>

    <b-col cols="12"  class="contact_element">
       <router-link :to="`/${$i18n.locale}/helpcategory/contact`"> <button class="category_box">{{ $t('help.CI') }}</button>
       </router-link>
    </b-col>

  </b-row>
</b-container>

<div class="faqs">{{ $t('help.FAQ') }}</div>

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

</div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'Help',

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
axios.get('http://localhost:3000/help')
.then(response => (this.items = response.data))
}
}
</script>
<style scoped>
#Help{
    margin-top: 70px;
    margin-bottom: 70px;
}
.help_category{
    margin-top: 30px;
}
.category_box{
    background: none;
    outline: none;
    width: 70%;
    padding-top: 10px;
    height: 50px;
    border: solid 1px #394791;
}.contact_element{
    margin-top: 10px;
}
.faqs{
    margin-top: 40px;
    text-align: left;
    font-weight: 100;
    margin-left: 30px;
}
.faq_question{
    text-align: left;
}
</style>