<template>
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label :class="computed_text_color" for="flexSwitchCheckDefault">{{ text }}</label>
    </div>
    <div v-if="discription" class="mx-4">
        <p :class="this.text_color">{{discription}}</p>
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
            default: 'placeholder'
        },
        checked_status: {
            type: Boolean,
            required: true,
            default: false
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
            return "form-check-label " + this.text_color;
        }
    }
    
}
</script>