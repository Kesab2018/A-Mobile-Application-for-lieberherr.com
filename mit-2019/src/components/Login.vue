<template>
<div id="Login">
    <img class ="carousel-img" alt="Carousel Image" src="./assets/two.jpg">
    <form class="login">
        <input name="email" v-bind:placeholder="$t('Login.email')" type="email" required="required">
                <input name="password" v-bind:placeholder="$t('Login.pass')" type="password" required="required">
                <router-link :to="`/${$i18n.locale}/forgotpassword`"><button class="forgot_btn" type="button">{{$t('Login.FP')}}</button></router-link>
                      <table width='100%'>
                          <tr>
                             <td><router-link :to="`/${$i18n.locale}/`"><button type="submit" class="login_btn">{{$t('Login.Log')}}</button></router-link></td>
                            <td><router-link :to="`/${$i18n.locale}/Signuppage`"> <button class="login_btn">{{$t('Login.Sign')}}</button></router-link></td>

                          </tr>
                      </table>
                      
                        
                        
    </form>
</div>
    
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>
#Login{
    margin-top: 70px;
    margin-bottom: 70px;
}
.login{
    margin-top: 30px;
}
.login input{
    margin-top: 30px;
    margin-left: 10%;
    line-height: 45px;
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
.login_btn{
    outline: none;
    width: 80%;
    height: 50px;
    background-color: #394791;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin-top: 30px;

}
.reg_btn{
    outline: none;
    width: 30%;
    height: 40px;
    background-color: #394791;
    color: white;
    font-size: 20px;
    margin-top: 70px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin-left: 60%;

}
.carousel-img{
    min-width: 100%;
    max-width: 100%;
    min-height: 250px;
    max-height: 250px;

}
.forgot_btn{
    display: block;
    margin-left: 10%;
    background: none;
    border: none;
    outline: none;

}
</style>