<template>
<div class="search-box">
    <form>
        <input class="search-txt" type="text" placeholder="Search Products">
           <button class="search-btn" type="submit">
       <img class ="search_ico" alt="Search Icon" src="./assets/search-icon.png">
   </button>
    </form>
</div>
</template>


<script>
export default {
    name: 'Search',
    
}
</script>

<style scoped>
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