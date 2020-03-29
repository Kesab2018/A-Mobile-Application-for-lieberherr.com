<template>
    <div id ="ListRepairGuides">

     <table width='100%' style="margin-top: 80px; margin-bottom: 20px;">
          <tr>
              <td width='10%' style="float: left; margin-left: 5%;"><b-button id="backBtn"><img src="./assets/back.png" class="back_btn"></b-button></td>
              <td width='80%' style="float: right; margin-right: 5%; margin-top: 4px;">
                  Repair Guide For Benz XLS 20 Repair Guide For Benz XLS 20
              </td>
          </tr>
      </table>


        <b-container>
    <b-row id= "b-row-body">
<b-col>
    <b-list-group>
  <b-list-group-item id="listA">
     
      <b-row><b-col>
          <p><strong>Problem:</strong> From me to you a to z and the manufacture of rediness to deal with</p>
      </b-col>
      </b-row>
  </b-list-group-item>
 <b-list-group-item id="listA">
     
      <b-row><b-col>
          <p><strong>Problem:</strong> Nothing is more exiting than the new two valve value expressor for the building A air conditioning</p>
      </b-col>
      </b-row>
  </b-list-group-item>
  <b-list-group-item id="listA">
      
      <b-row><b-col>
          <p><strong>Problem:</strong> Food for the machine is the fast paced movement of the machinery from more that two extra points</p>
      </b-col>
      </b-row>
  </b-list-group-item>

</b-list-group>
</b-col>
    </b-row>

</b-container>
    </div>

</template>

<script>
export default {
    name: 'ListRepairGuides',
}
</script>

<style scoped>
#ListRepairGuides{
    margin-top: 70px;
    margin-bottom: 70px;
}
#b-row-head {
    padding-bottom: 20px;
}
#addBtn {
    background-color: #394791;

    
    
}
#backBtn {
    background: none;
    outline: none !important;
    border: none;
    margin: 0px;
    padding: 0px;
}
#listA {
    border-radius: 20px;
    margin: 10px;
    background-color: #394791;
    color: white;
}

.back_btn{
    max-height: 35px;
    outline: none;
}
</style>