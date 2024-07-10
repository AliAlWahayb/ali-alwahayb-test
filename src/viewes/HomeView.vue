<template>
    <div class="row min-vh-100 custom-bg-color">

      <SideBarComponent/>

      <component :is="messageFromMiddle" @messageToOutermost="handleMessageFromMiddle"/>

      
    </div>
</template>


<script>
    import SideBarComponent from '../components/SideBarComponent.vue'
    import NotificationSetting from '../components/NotificationSetting.vue'
    import ReportsComponent from '../components/ReportsComponent.vue'

export default {
    components: {
        NotificationSetting,
        SideBarComponent,
        ReportsComponent
    },
    data() {
        return {
        messageFromMiddle: 'NotificationSetting',
        };
    },
    methods: {
        handleMessageFromMiddle(message) {
        this.messageFromMiddle = message;
        }
    }
}
</script>

<style scoped>
    .custom-bg-color{
        background-color: #424242;
    }
</style>