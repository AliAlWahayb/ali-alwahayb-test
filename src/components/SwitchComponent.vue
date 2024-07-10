<template>
    <div class="form-check form-switch d-flex align-items-center">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" :checked="computed_checked_status" @change="sendMessageToOutermost" >
    <label :class="computed_text_color" for="flexSwitchCheckDefault">{{ text }}</label>
    </div>
    <div v-if="discription" class="ms-5">
        <p :class="this.text_color + ' text-capitalize'">{{discription}}</p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: 'placeholder'
        },
        toggle_method: {
            type: String,
            required: true,
            default: 'helloworldMethod()'
        },
        checked_status: {
            type: String,
            required: false,
            default: ""
        },
        text_color: {
            type: String,
            required: true,
            default: 'text-white'
        },
        discription: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        computed_text_color() {
            return "form-check-label ms-2 text-capitalize " + this.text_color;
        },
        computed_checked_status() {
            return Boolean(this.checked_status);
        },
    },
    emits: ['messageToOutermost'],
    methods: {
        sendMessageToOutermost(event) {
        if (event.target.checked) {
            this.$emit('messageToOutermost', 'ReportsComponent');
        }
        }
    }


    
}
</script>


<style scoped>
.form-switch .form-check-input {
    height: 2em;
    width: 3em;
    --bs-form-switch-bg: url(data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r="3.7" fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e) !important;

}

.form-switch .form-check-input:checked {
    background-color: #6C5ECF;
    border-color: #6C5ECF;
    --bs-form-switch-bg: url(data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r="3.7" fill=%27%23fff%27/%3e%3c/svg%3e) !important;
    
}


</style>