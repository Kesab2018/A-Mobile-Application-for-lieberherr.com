<template>
    <div id ="Messages">
      <table width='100%' style="margin-top: 80px; margin-bottom: 20px;">
          <tr>
              <td style="float: left; margin-left: 10%;"><b-button id="backBtn"><img src="./assets/back.png" class="back_btn"></b-button></td>
              <td style="float: right; margin-right: 10%;"><b-button pill id="addBtn">New Chat</b-button></td>
          </tr>
      </table>


        <b-container>

    <b-row id= "b-row-body">
<b-col>

    <b-list-group-item id="listA">
            <table width='100%' style="margin-bottom: 15px;">
          <tr>
              <td style="float: left;">by Elijah</td>
              <td style="float: right;">24/12/2019</td>
          </tr>
      </table>
      <b-row><b-col>
          <p style='text-align: justify;'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </b-col>
      </b-row>
  </b-list-group-item>

    <b-list-group-item id="listA">
            <table width='100%' style="margin-bottom: 15px;">
          <tr>
              <td style="float: left;">by Elijah</td>
              <td style="float: right;">24/12/2019</td>
          </tr>
      </table>
      <b-row><b-col>
          <p style='text-align: justify;'> Lorem Ipsum is simply dummy text Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </b-col>
      </b-row>
  </b-list-group-item>


    <b-list-group-item id="listA">
            <table width='100%' style="margin-bottom: 15px;">
          <tr>
              <td style="float: left;">by Elijah</td>
              <td style="float: right;">24/12/2019</td>
          </tr>
      </table>
      <b-row><b-col>
          <p style='text-align: justify;'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </b-col>
      </b-row>
  </b-list-group-item>





</b-col>
    </b-row>

</b-container>
    </div>
</template>

<script>
export default {
    name: 'Messages',
    
}
</script>

<style scoped>
#Messages{
    margin-top: 70px;
    margin-bottom: 70px;
}
#b-row-head {
    padding-bottom: 20px;
}
#addBtn {
    background-color: #394791;
    margin-right: -20%;
    
    
}

#listA {
    border-radius: 20px;
    margin: 10px;
    background-color: #394791;
    color: white;
}
#backBtn {
    background: none;
    outline: none !important;
    border: none;
    margin: 0px;
    padding: 0px;
}

.back_btn{
    max-height: 35px;
    outline: none;
}
</style>