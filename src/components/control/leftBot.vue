<template>
<div id="leftBot">
 <textList></textList>
</div>
</template>

<script>
    import textList from '../list/textlist.vue'
export default {
    components:{
        textList
    }
}
</script>

<style scoped>
    h1{
       font-weight:300; 
    }
    #leftBot{
        width:100%;
        padding:10px;
        overflow: auto;
        float:left;
        box-sizing: border-box;
        
    }
</style>