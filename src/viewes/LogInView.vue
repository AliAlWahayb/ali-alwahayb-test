<template>
    <div class="row min-vh-100">
      <div class="col-4 custom-bg-gradiant d-flex justify-content-center align-items-center">
        <div class="text-center">
          <img src="../assets/images/logo.svg" alt="" class="img-fluid my-3">
          <h1 class="text-white h1">Gittax</h1>
        </div>
      </div>
  
      <div class="col-8 ">
        <div class="row">
          <a dir="rtl" class="px-5 py-2 h4 text-decoration-none" href="#">اللغه العربيه</a>
        </div>
        <!-- LogInForm component -->
        <LogInForm/>
  
      </div>
    </div>
  </template>
  
  
  
  <script>
  import LogInForm from '../components/LogInForm.vue'
  
  export default {
    components: {
      LogInForm
    }
  
  }
  </script>
  
  <style scoped>
   .custom-bg-gradiant{
    background: linear-gradient(102.16deg, #303030 -78.58%, rgba(48, 48, 48, 0) 278.09%);
   }
  
  </style>