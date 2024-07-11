<template>
    <div class="col-10 ">
        <div class="row mx-3 my-3 text-white">
            <div class="d-flex justify-content-between">
                <div>
                    <h4 class="h1">{{ $t('notificationSettings') }}</h4>
                </div>
                
                <div class="d-flex">
                    <div class="me-3 mt-1 text-center">
                        <img src="../assets/icons/notification-on.svg" alt="notification">
                    </div>
                    <div class="d-flex">
                        <img src="../assets/icons/profile-pic.svg" alt="profile pic" class="me-2">
                        <div class="d-flex flex-column">
                            <small class="mx-2">{{ $t('welcome') }}</small>
                            <SideBarDropDownMenu :text="$t('name')" text_color="text-white" style="padding: 0; margin: 0"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second row -->
        <div class="row mx-4 my-3">
            <SwitchComponent :text="$t('systemNotification')" :discription="$t('allNotifications')" text_color="text-white" toggle_method="placeholder"  @messageToOutermost="handleMessageFromInnermost"/>
            <SwitchComponent :text="$t('billingCreated')" :discription="$t('billingDescription')" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
            <SwitchComponent :text="$t('backupMaker')" :discription="$t('backupDescription')" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
            <SwitchComponent :text="$t('gotFreeMonth')" :discription="$t('freeMonthDescription')" text_color="text-white" toggle_method="placeholder" checked_status="true"/>
            
        </div>
  
    </div>
</template>

<script>
    import SwitchComponent from '../components/SwitchComponent.vue'
    import SideBarDropDownMenu from '../components/SideBarDropDownMenu.vue'

export default {
    components: {
        SwitchComponent,
        SideBarDropDownMenu
    },
    data() {
        return {
        messageFromInnermost: ''
        };
    },
    emits: ['messageToOutermost'],
    methods: {
        handleMessageFromInnermost(message) {
        this.$emit('messageToOutermost', message);
        }
    }
}
</script>