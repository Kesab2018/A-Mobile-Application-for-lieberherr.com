<template>
    <div id="Profile">
        
            <table width='100%'>
                <tr><img class='profile_img' src='./assets/profile.png'></tr>
                <tr><button class="profile_btn">MESSAGES</button></tr>
                <tr><button class="profile_btn">DOCUMENTATIONS</button></tr>
                <tr><button class="profile_btn">SETTINGS</button></tr>
                <tr><button class="profile_btn">LOGOUT</button></tr>
               

            </table>
        


    </div>
</template>

<script>
export default {
    name: 'Profile',
}
</script>

<style scoped>
#Profile{
    margin-top: 70px;
    margin-bottom: 70px;
}

.profile_img{
    border: 2px solid #FDC400;
    border-radius: 50%;
    max-height: 200px;
    min-height: 200px;

}
.profile_btn{
    margin-top: 20px;
    height: 45px;
    color: white;
    border-radius: 30px;
    background-color: #394791;
    width: 70%;
}

</style>