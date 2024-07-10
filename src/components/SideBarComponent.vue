<template>
    <div class="col-2 border-end custom-border-color">
        <div class="row">
            <div class="text-center h-25">
                <img src="../assets/images/logo.svg" alt="logo" class="w-25 h-25 mt-3">
            </div>
        </div>
        <!-- second row -->
        <div class="row mb-3">
            <SideBarTab icon="side-bar-tab-icon.svg" text="Home" text_color="text-warning"/>
            <SideBarCollapse icon="Invoices-and-reports.svg" text="Invoices and reports" text_color="text-white"/>
            <SideBarTab icon="Services-link.svg" text="Services-Link" text_color="text-white"/>
            <SideBarTab icon="Videos.svg" text="Videos" text_color="text-white"/>
            <SideBarTab icon="affiliate.svg" text="Affiliate" text_color="text-white"/>
            <SideBarTab icon="Contact-us.svg" text="Contact-us" text_color="text-white" badge="10+"/>
            <SideBarTab icon="Permissions.svg" text="Permissions" text_color="text-white"/>
        </div>
        <!-- third row -->
        <div class="row mx-3 mb-3">
            <SwitchComponent text="اللغة العربية" text_color="text-white" toggle_method="placeholder"/>
            <SwitchComponent text="Night mode" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
        </div>
        <!-- fourth row -->
        <div class="row mx-3 my-3">
            <button type="button" class="btn btn-warning w-100" data-bs-toggle="modal" data-bs-target="#popUp">DOWNLOAD APPS</button>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="popUp" tabindex="-1" aria-labelledby="popUpLabel" aria-hidden="true">
    <div class="modal-dialog w-100">
        <div class="modal-content custom-bg-color">
        <div class="modal-body text-white">
            <div class="d-flex justify-content-between">
                <h1 class="modal-title fs-5 text-white" id="popUpLabel">Add New Testimonial</h1>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><img src="../assets/icons/Close.svg" alt="close button"></button>
            </div>
            <div class=" mb-3">
                <label class="form-label">User Photo</label>
                <div class="custom-border text-center p-5 d-flex-column align-items-center">
                    <img src="../assets/icons/AddImage.svg" alt="add image">
                    <p>drop your image here or browse </p>
                    <p class="">max size 5 mB , 35*35 pixcel supported format jpg, png  </p>
                </div>
            </div>

            <div>
                <form>
                <div class="mb-3">
                    <label for="UserName" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="UserName" aria-describedby="UserNameHelp">
                </div>
                <div class="mb-3">
                    <label for="CompanyName" class="form-label">Company Name</label>
                    <input  type="text" class="input form-control border-end-0" />
                </div>
                <div class="mb-3">
                    <label for="Content" class="form-label">Content</label>
                    <div class="">
                        <textarea type="text" class="input form-control border-end-0 text-white" style="resize: none;" v-model="textarea_text" rows="4" cols="50" maxlength="150"></textarea>
                        <small class="form-text float-end  text-white p-2" style="transform: translateY(-100%);" ><small class="text-warning fs-6" style="transform: translateY(100%);">{{textarea_text.length}}</small>/150</small>
                    </div>
                </div>
                </form>
            </div>
            <div class="d-flex justify-content-end" style="transform: translateX(13%);">
                <button type="button" class="btn btn-warning">Save</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    import SideBarTab from '../components/SideBarTab.vue'
    import SwitchComponent from '../components/SwitchComponent.vue'
    import SideBarCollapse from '../components/SideBarCollapse.vue'

export default {
    components: {
        SideBarTab,
        SwitchComponent,
        SideBarCollapse,
    },
    data() {
        return {
            textarea_text: "",
        };
    },
}
</script>

<style scoped>
    .custom-bg-color{
        background-color: #424242;
    }
    .custom-border-color{
        border-color: #34373C !important; 
    }
    .custom-border{
        border: 1px dashed #646363 !important;
        border-radius: 5px !important;
    }
    .form-control{
        background-color: #5F5F5F !important;
        border: none !important;
    }
</style>

