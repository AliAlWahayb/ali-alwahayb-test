<template>
    <div class="col-2 border-end custom-border-color">
        <div class="row">
            <div class="text-center h-25">
                <img src="../assets/images/logo.svg" alt="logo" class="w-25 h-25 mt-3">
            </div>
        </div>
        <!-- second row -->
        <div class="row mb-3">
            <SideBarTab icon="side-bar-tab-icon.svg" :text="$t('home')" text_color="text-warning"/>
            <SideBarCollapse icon="Invoices-and-reports.svg" :text="$t('invoicesAndReports')" text_color="text-white"/>
            <SideBarTab icon="Services-link.svg" :text="$t('servicesLink')" text_color="text-white"/>
            <SideBarTab icon="Videos.svg" :text="$t('videos')" text_color="text-white"/>
            <SideBarTab icon="affiliate.svg" :text="$t('affiliate')" text_color="text-white"/>
            <SideBarTab icon="Contact-us.svg" :text="$t('contactUs')" text_color="text-white" badge="10+"/>
            <SideBarTab icon="Permissions.svg" :text="$t('permissions')" text_color="text-white"/>
        </div>
        <!-- third row -->
        <div class="row mx-3 mb-3">
            <div @click="changeLang" style="margin-left: -12px;">
                <SwitchComponent :text="$t('language')" text_color="text-white" toggle_method="placeholder" />
            </div>
            <SwitchComponent :text="$t('nighthMode')" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
        </div>
        <!-- fourth row -->
        <div class="row mx-3 my-3">
            <button type="button" class="btn btn-warning w-100" data-bs-toggle="modal" data-bs-target="#popUp">{{ $t('downloadApps') }}</button>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="popUp" tabindex="-1" aria-labelledby="popUpLabel" aria-hidden="true">
    <div class="modal-dialog w-100">
        <div class="modal-content custom-bg-color">
        <div class="modal-body text-white">
            <div class="d-flex justify-content-between">
                <h1 class="modal-title fs-5 text-white" id="popUpLabel">{{ $t('addNewTestimonial') }}</h1>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><img src="../assets/icons/Close.svg" alt="close button"></button>
            </div>
            <div class=" mb-3">
                <label class="form-label">{{ $t('userPhoto') }}</label>
                <div class="custom-border text-center p-5 d-flex-column align-items-center">
                    <img src="../assets/icons/AddImage.svg" alt="add image">
                    <p>{{ $t('dropImageHere') }} </p>
                    <p class="">{{ $t('maxSize') }} , 35*35 {{ $t('pixcel') }} {{ $t('supportedFormat') }}  </p>
                </div>
            </div>

            <div>
                <form>
                <div class="mb-3">
                    <label for="UserName" class="form-label">{{ $t('userName') }}</label>
                    <input type="text" class="form-control" id="UserName" aria-describedby="UserNameHelp">
                </div>
                <div class="mb-3">
                    <label for="CompanyName" class="form-label">{{ $t('companyName') }}</label>
                    <input  type="text" class="input form-control border-end-0" />
                </div>
                <div class="mb-3">
                    <label for="Content" class="form-label">{{ $t('content') }}</label>
                    <div class="">
                        <textarea type="text" class="input form-control border-end-0 text-white" style="resize: none;" v-model="textarea_text" rows="4" cols="50" maxlength="150"></textarea>
                        <small class="form-text float-end  text-white p-2" style="transform: translateY(-100%);" ><small class="text-warning fs-6" style="transform: translateY(100%);">{{textarea_text.length}}</small>/150</small>
                    </div>
                </div>
                </form>
            </div>
            <div class="d-flex justify-content-end" style="transform: translateX(13%);">
                <button type="button" class="btn btn-warning">{{ $t('save') }}</button>
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
    methods: {
      changeLang() {
        this.$i18n.locale = this.$i18n.locale === 'EN' ? 'AR' : 'EN';
      }
    }
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

