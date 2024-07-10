<template>
    <div class="col-10 ">
        <div class="row mx-3 my-3 text-white">
            <div class="d-flex justify-content-between">
                <div>
                    <h4 class="h1">Reports</h4>
                </div>
                
                <div class="d-flex">
                    <div class="me-3 mt-1 text-center">
                        <img src="../assets/icons/notification-on.svg" alt="notification">
                    </div>
                    <div class="d-flex">
                        <img src="../assets/icons/profile-pic.svg" alt="profile pic" class="me-2">
                        <div class="d-flex flex-column">
                            <small class="mx-2">Welcome</small>
                            <SideBarDropDownMenu text="Ali alwahayb" text_color="text-white" style="padding: 0; margin: 0"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second row -->
        <div class="row d-flex flex-row mb-3 w-100">
            <CheckBoxCard text="Total sales" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
            <CheckBoxCard text="Total administrative fees" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
            <CheckBoxCard text="playgrounds" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
            <CheckBoxCard text="Total subscription sales" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
            <CheckBoxCard text="clients" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
            <CheckBoxCard text="bank fee" 
            discription="all invoice with many details you can see as clients and amounts and every things " 
            checked_status="true" />
        </div>
  
    </div>

</template>

<script>
    import CheckBoxCard from './CheckBoxCard.vue'
    import SideBarDropDownMenu from '../components/SideBarDropDownMenu.vue'
    export default {
    components: { CheckBoxCard
     ,SideBarDropDownMenu
     },

    }
</script>
