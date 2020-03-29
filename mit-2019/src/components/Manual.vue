<template>
<div id="Manual">
<div class="back_btn_holder">
<a @click="$router.go(-1)"> <img class ="back_btn" src="./assets/back.png"> </a>
</div>
<iframe class="chat_frame" :src="`${items.manual}`" id="iframe1" frameborder="0" border="0" cellspacing="0" style="border-style: none; width: 100%; height: 700px; margin: 0; padding: 0;" 


></iframe>
</div>  
</template>

<script>
import axios from 'axios';
export default {
    name: 'Manual',
        data() {
    return{
        link: this.$route.params.link,
        items: [],
    }
    },

    methods: {
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('http://localhost:3000/products/'+ this.link)
.then(response => (this.items = response.data))
}

}
</script>

<style scoped>
#Manual{
    margin-bottom: 70px;
    margin-top: 70px;
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
</style>