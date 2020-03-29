<template>
    <div id ="Chat">

<iframe class="chat_frame" src="http://localhost:5000/" id="iframe1" frameborder="0" border="0" cellspacing="0" style="border-style: none; width: 100%; height: 700px; margin: 0; padding: 0;" 


></iframe>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    
}
</script>

<style scoped>
#Chat{
    margin-top: 70px;
    margin-bottom: 70px;
    
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
#pA{
    background-color: #394791;
    border-radius: 20px;
}
#pB{
    background-color: #fdc400;
    border-radius: 20px;
}
#b-row-chat{
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
}
.chat_frame{
    height: 100%;
}
</style>