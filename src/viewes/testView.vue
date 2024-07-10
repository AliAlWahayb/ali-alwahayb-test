<template>
  <div class="row min-vh-100 custom-bg-color">

    <SideBarComponent/>

    <ReportsComponent/>
    
  </div>
</template>


<script>
  import SideBarComponent from '../components/SideBarComponent.vue'
  import ReportsComponent from '../components/ReportsComponent.vue'

export default {
  components: {
      SideBarComponent,
      ReportsComponent,
  }
}
</script>

<style scoped>
  .custom-bg-color{
      background-color: #424242;
  }
</style>

