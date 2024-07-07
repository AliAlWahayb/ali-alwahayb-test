<template>
    <div class="row min-vh-100 custom-bg-color">
      <div class="col-2 border-end custom-border-color">
        <!-- todo:fix border color up -->
        <div class="row">
            <div class="text-center h-25">
                <img src="../assets/images/logo.svg" alt="logo" class="w-25 h-25 mt-3">
            </div>
        </div>
        <!-- second row -->
        <div class="row">
            <SideBarTab icon="side-bar-tab-icon.svg" text="Home" text_color="text-warning"/>
            <!-- todo:fix text allinment dropdown -->
            <SideBarDropDownMenu icon="Invoices-and-reports.svg" text="Invoices and reports" text_color="text-white"/>
            <SideBarTab icon="Services-link.svg" text="Services-Link" text_color="text-white"/>
            <SideBarTab icon="Videos.svg" text="videos" text_color="text-white"/>
            <SideBarTab icon="affiliate.svg" text="affiliate" text_color="text-white"/>
            <div class="d-flex align-items-center">
                <SideBarTab icon="Contact-us.svg" text="Contact-us" text_color="text-white"/>
                <img src="../assets/icons/RedNotification.svg" alt="notification" class="h-25 w-25">
            </div>
            
            <SideBarTab icon="Permissions.svg" text="Permissions" text_color="text-white"/>
        </div>
        <!-- third row -->
        <div class="row mx-3 my-3">
            <!-- todo:make larger and fix checked -->
            <SwitchComponent text="اللغة العربية" text_color="text-white" toggle_method="placeholder" checked_status="false"/>
            <SwitchComponent text="Night mode" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
        </div>
        <!-- fourth row -->
        <div class="row mx-3 my-3">
            <button type="button" class="btn btn-warning w-100">DOWNLOAD APPS</button>
        </div>

      </div>
  
      <div class="col-10 ">
        <div class="row mx-3 my-3 text-white">
            <div class="d-flex justify-content-between">
                <div>
                    <h4 class="h1">Notification Setting</h4>
                </div>
                
                <div class="d-flex">
                    <div class="me-3 mt-1 text-center">
                        <img src="../assets/icons/notification-on.svg" alt="notification">
                    </div>
                    <div class="d-flex">
                        <img src="../assets/icons/profile-pic.svg" alt="profile pic" class="me-2">
                        <div>
                            <small>Welcome</small>
                            <h5>Ali Alwahayb</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second row -->
        <div class="row mx-4 my-3">
            <!-- fix sizing -->
            <SwitchComponent text="system notification" discription="all notifications sending by GitTax Team ." text_color="text-white" toggle_method="placeholder" checked_status="false"/>
            <SwitchComponent text="Billing Created" discription="all bills created by source or you will make a successful notification ." text_color="text-white" toggle_method="placeholder" checked_status="false"/>
            <SwitchComponent text="Backup maker" discription="when your backup sent to your mail will get a successfull notification ." text_color="text-white" toggle_method="placeholder" checked_status="false"/>
            <SwitchComponent text="Got free month" discription="if someone use your affiliate code you will get free 1 month just one time " text_color="text-white" toggle_method="placeholder" checked_status="false"/>
            
        </div>
  
      </div>
    </div>
</template>


<script>
    import SideBarTab from '../components/SideBarTab.vue'
    import SwitchComponent from '../components/SwitchComponent.vue'
    import SideBarDropDownMenu from '../components/SideBarDropDownMenu.vue'

export default {
    components: {
        SideBarTab,
        SwitchComponent,
        SideBarDropDownMenu,
    }
}
</script>

<style scoped>
    .custom-bg-color{
        background-color: #424242;
    }
    .custom-border-color{
        border-color: #34373C;
    }
</style>