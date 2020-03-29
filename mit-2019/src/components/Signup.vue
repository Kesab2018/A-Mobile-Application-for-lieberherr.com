<template>
<div id="Signup">

    <form class="signup" @submit="postData()">
        <input name="fname" placeholder="First Name" type="text" required="required" v-model="fname">
        <input name="lname" placeholder="Last Name" type="text" required="required" v-model="lname">
        <input name="uname" placeholder="User Name" type="text" required="required" v-model="uname">
        <input name="email" placeholder="Company Email Address" type="email" required="required" v-model="email">
        <input name="location" placeholder="Company Location" type="text" required="required" v-model="location">
                <input name="password" placeholder="Password" type="password" required="required" v-model="password">
                        <button type="submit" class="signup_btn">SIGNUP</button>

    </form>

</div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() {
    return{
    fname:'',
    lname: '',
    uname:'',
    email:'',
    location:'',
    password:'',

    }
    },


    methods: {
    postData: function(){
    const options = {
  headers: {  'Content-type': 'application/json',}
};
    axios.post('http://localhost:3000/api/signup',{
    firstname: this.fname,
    lastname: this.lname,
    username: this.uname,
    companyEmail: this.email,
    companyLocation: this.location,
    password: this.password
    }, options)
    .then(this.$router.push('/'))
    .catch(error => {
      window.console.log(error)
    })

    }
}



}



</script>

<style scoped>
#Signup{
    margin-top: 70px;
    margin-bottom: 70px;
}
.signup{
    margin-top: 120px;
}
.signup input{
    margin-top: 30px;
    margin-left: 10%;
    line-height: 50px;
    box-shadow: 1px 1px grey;
    border: none;
    width: 80%;
    text-align: left;
    display: block;
    border-radius: 20px;
    padding-left: 10px;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.signup_btn{
    outline: none;
    width: 40%;
    height: 50px;
    background-color: #394791;
    color: white;
    font-size: 20px;
    margin-top: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;

}


</style>
