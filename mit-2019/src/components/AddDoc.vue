<template>
    <div id ="AddDoc">
       <router-link :to="`/${$i18n.locale}/documentation/${id}`"> <b-button id="backBtn"><img src="./assets/back.png" class="back_btn"></b-button></router-link>
        <b-container>
              <form @submit="postData()">
            <b-row id ="row-input">
              
                <b-form-input id = "bFormInput" v-model="problem" placeholder="Problem" name="problem"></b-form-input>
                </b-row>
                 <b-row >
                      <b-form-textarea
    id="textarea-rows"
    placeholder="Solution"
    rows="20"
    name="solution"
    v-model="solution"
  ></b-form-textarea>
                </b-row>
                <button class="add_btn" type="submit">ADD</button>
                    </form>
            </b-container>
    </div>
</template>


<script>

import axios from 'axios';
export default {
    name: 'AddDoc',
    data() {
    return{
    id: this.$route.params.id,
    problem:'',
    solution:'',
    

    }
    },


    methods: {
    postData: function(){
    const options = {
  headers: {  'Content-type': 'application/json',}
};
    axios.post('http://localhost:3000/adddocumentation',{
    Author: 'Tayo',
    Problem: this.problem,
    Solution: this.solution,
    Product_id: this.id,
    }, options)
    .then(this.$router.push("/de/documentation/"+this.id))
    .catch(error => {
      window.console.log(error)
    })

    }
}



}
</script>

<style scoped>
#AddDoc{
    margin-top: 70px;
    margin-bottom: 70px;
    
}

#row-input {
    margin-bottom: 30px;
    width: 98%;
    margin-left: 1%;
    
}
#bFormInput {
    border-radius: 30px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#textarea-rows{
    width: 96%;
    margin-left: 2%;
    border-radius: 30px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#backBtn {
    background: none;
    outline: none !important;
    border: none;
    padding: 0px;
    float: left;
    margin-left: 10px;
    margin-bottom: 10px;
}
.back_btn{
    max-height: 35px;
    outline: none;
}
.add_btn{
    margin-top: 15px;
    height: 40px;
    border-radius: 20px;
    color: white;
    font-size: 22px;
    width: 80px;
    background-color: #394791;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
  
</style>