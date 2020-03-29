<template>
<div id="Contact">

    <div class="search-box">
        <input class="search-txt" type="text" v-bind:placeholder="$t('contact.Search')" required="required" v-model="searchquery">
       <router-link :to="`/${$i18n.locale}/contactlist/${searchquery}`">       
           <button class="search-btn" type="button">
       <img class ="search_ico" alt="Search Icon" src="./assets/search-icon.png">
   </button>
   </router-link>
</div>
<table class="icon_table">
            <tr>
                <td></td>
                <td><img class="contact_img" src="./assets/call.png"></td>
                <td><a href="https://www.instagram.com/liebherrconstruction/"><img class="contact_img" src="./assets/ig.png"></a></td>
                <td><img class="contact_img" src="./assets/twitter.png"></td>
                <td><img class="contact_img" src="./assets/facebook.png"></td>
                <td></td>

            </tr>
        </table>
    <form class="contact">
                <input name="name" v-bind:placeholder="$t('contact.Name')" type="text" required="required">
        <input name="email" v-bind:placeholder="$t('contact.Email')" type="email" required="required">
                <textarea class="contact_msg" v-bind:placeholder="$t('contact.Msg')" name="messsage" required="required"></textarea>
                        <button type="submit" class="send_btn">{{$t('contact.Send')}}</button>
                        
    </form>

</div>
    
</template>

<script>
export default {
    name: 'Contact',
    data(){
        return{
            searchquery: this.searchquery,
        }
    }
}
</script>

<style scoped>
#Contact{
    margin-top: 70px;
    margin-bottom: 70px;
}
.contact{
    margin-top: 30px;
    border: none;
}
.icon_table{
    width: 80%;
    margin-left: 10%;
    text-align: center;
}

.contact input{
    margin-top: 15px;
    margin-left: 10%;
    line-height: 40px;
    width: 80%;
    text-align: left;
    display: block;
    border-radius: 20px;
    padding-left: 10px;
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.contact_msg{
    margin-top: 15px;
    margin-left: 10%;
    height: 210px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 80%;
    text-align: left;
    display: block;
    border-radius: 20px;
    padding-left: 10px;
    outline: none;
}
.contact_img{
    margin-top: 20px;
    height: 30px;
}
.send_btn{
    outline: none;
    width: 40%;
    height: 50px;
    background-color: #394791;
    color: white;
    font-size: 20px;
    margin-top: 20px;
    border-radius: 20px;
}
.search-box {
    margin-top: 10px;
    margin-left: 10%;
    width: 80%;
    background: none;
    border: solid 2px #394791;
    height: 44px;
    padding: 0px;
    background-color: white;
    border-radius: 10px;
}
.search-txt{
    margin: 0px;
    padding: 0px;
    width: 80%;
    min-width: 80%;
    font-size: 16px;
    line-height: 35px;
    border: none;
    outline: none;
}
.search_ico{
    height: 20px;
}
.search-btn{
    padding: 0px;
    border-radius: 50%;
    border: solid 2px #394791;
    margin-right: 3px;
    padding: 4px;
    background: none;
    margin-top: 2px;
    outline: none;
    float: right;
}
</style>