<template>
  <router-view/>
</template>


<style>
  .text-warning {
    --bs-warning-rgb: 254, 221, 89;
      --bs-text-opacity: 1;
      color: rgba(#fedd59, var(--bs-text-opacity)) !important;
  }
  .btn-warning {
    --bs-btn-bg: #fedd59 !important;
    --bs-btn-border-color: #fedd59 !important;
  }
  html{
    overflow: hidden;
  }

  body {
        /* 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, poppins; */

    --bs-body-font-family: 'Trebuchet MS' !important;
    --bs-body-font-weight: 500 !important;

  }

  body.rtl {
    direction: rtl;
    margin-right: 3rem !important;

  }
  .rtl .mx-2 {
    margin-right: 3rem !important;
}

</style>