<template>
  <div id = "Documentation">
      <table width='100%' style="margin-top: 80px; margin-bottom: 20px;">
          <tr>
              <td style="float: left; margin-left: 10%;"><router-link :to="`/${$i18n.locale}/productdetail/${id}`"><b-button id="backBtn"><img src="./assets/back.png" class="back_btn"></b-button></router-link></td>
              <td style="float: right; margin-right: 10%;"><router-link :to="`/${$i18n.locale}/adddoc/${id}`"><b-button pill id="addBtn">Add Document</b-button></router-link></td>
          </tr>
      </table>



<b-container>
    <b-row id= "b-row-body">
<b-col>

    <b-list-group>
  <b-list-group-item id="listA" v-for="item in items" :key="item._id">
      
            <table width='100%' style="margin-bottom: 15px;">
          <tr>
              <td style="float: left;">by {{item.Author}}</td>
              <td style="float: right;">{{ item.Date | moment("DD/MM/YYYY") }}</td>
          </tr>
      </table>
     
      <b-row><b-col>
         <router-link :to="`/${$i18n.locale}/DocDetail/${item._id}/${id}`" class="link">  <p style='text-align: justify; width: 100%;'> <u>{{item.Problem}} </u></p>  </router-link> 
      </b-col>
      </b-row>
  </b-list-group-item>








  
</b-list-group>
</b-col>
    </b-row>

</b-container>
      </div>  
</template>

<script>
import axios from 'axios';

export default {
    name: 'Documentation',
    
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
axios.get('http://localhost:3000/getdocumentation/'+ this.id)
.then(response => (this.items = response.data))
}


}
</script>


<style scoped>
#Documentation{
    margin-top: 70px;
    margin-bottom: 70px;
}

#addBtn {
    background-color: #394791;
    
    
}
#backBtn {
    background: none;
    outline: none !important;
    border: none;
    margin: 0px;
    padding: 0px;
}
#listA {
    border-radius: 20px;
    margin: 10px;
    background-color: #394791;
    color: white;
    hyphens: auto;
}
.back_btn{
    max-height: 35px;
    outline: none;
}
.link{
    color: #9a978f;
}
</style>

