<template>
    <div id="Forgotpassword">
        
        <form class="forgotpasswordform">
            <input placeholder="Email Address" required='required'>
            <button type="submit">Reset Password </button>
        </form>
        <div class="forgotpassword">
        <p>If you have not yet registered for an account please <router-link :to="`/${$i18n.locale}/Signuppage`">Click here</router-link></p>
        </div>
    </div>
<!-- your account has not yet been created.. error if emai not in database -->

</template>

<script>
export default {
    name: 'ForgotPassword',
}
</script>

<style scoped>
#Forgotpassword{
        margin-top: 120px;
    margin-bottom: 70px;
}
.forgotpassword{
    font-size: 15px;
    margin-top: 50px;
}

.forgotpasswordform input{
width: 90%;
line-height: 24px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
height: 40px;
outline: none;
border: none;
border-radius: 20px;
padding-left: 10px;
margin-top: 10px;

}
.forgotpasswordform button{
    color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 40px;
    background-color: #394791;
    margin-top: 20px;
    width: 150px;
    border: none;
    outline: none;
}
</style>