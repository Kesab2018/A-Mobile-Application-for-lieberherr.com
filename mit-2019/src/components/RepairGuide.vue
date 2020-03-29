<template>
<div id="RepairGuide">
    
    <b-card
    id="b-card-body"
    title="HIGH PRESSURE REPAIR  STEP 1">
    <b-card-text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
    </b-card-text>
    <table width='100%;'>
        <tr>
            <td style="float: left; "><b-button pill>I.O</b-button></td>
            <td style="float: right; "><b-button pill>N.I.O</b-button></td>
        </tr>
    </table>

    </b-card>
</div>
    
</template>

<script>
export default {
    name: 'RepairGuide',
}
</script>

<style scoped>
#RepairGuide{
    margin-top: 100px;
    margin-bottom: 70px;

}
#b-card-body{
        width: 90%;
    margin-left: 5%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#b-card-body button{
  background-color: #394791;
}
</style>