<template>
        <div class="col-4">
            <div class="card text-bg-light w-100 mb-3" @click="toggle">
            <div class="card-body">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="test" value="" aria-label="Checkbox for following text input" :checked="computed_checked_status" @click="sendMessageToOutermost">
                    <h5 class="card-title text-capitalize">{{ text }}</h5>
                </div>
                <p class="card-text text-muted">{{ discription }}</p>
            </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                real_checked_status: Boolean(this.checked_status),
            };
        },
        props: {
            text: {
                type: String,
                required: true,
                default: 'placeholder'
            },
            toggle_method: {
                type: String,
                required: false,
                default: 'helloworldMethod()'
            },
            checked_status: {
                type: String,
                required: false,
                default: ""
            },
            discription: {
                type: String,
                required: false,
                default: ''
            }
        },
        computed: {
            computed_checked_status() {
                return this.real_checked_status;
            },
        },
        emits: ['messageToOutermost'],
        methods: {
            toggle() {
                this.real_checked_status = !this.real_checked_status;
                if (this.real_checked_status) {
                    this.sendMessageToOutermost({
                        target: {
                            checked: true
                        }
                    });
                }
            },
            sendMessageToOutermost(event) {
                if (event && event.target.checked) {
                    this.$emit('messageToOutermost', 'NotificationSetting');
                }
            }
            

        },
    };
</script>

<style scoped>
    .form-check-input:checked {
    background-color: #575cd4 !important;
    border-color: #575cd4 !important;
}
.form-check-input {
    width: 1.2em !important;
    height: 1.2em !important;
}

</style>