<template>
    <button type="button" class="btn" >
        <div class="d-flex mx-3 my-1">
            <img :src="require(`@/assets/icons/${icon}`)" :alt="alt_Text" class=" me-3">
            <div class=" text-center d-flex justify-content-center align-items-center">
                <p :class="computed_text_color" style="margin: 0;">{{ text }}<span v-if="badge" class="badge bg-danger ms-2 rounded-pill">{{badge}}</span></p>
            </div>
            
        </div>
    </button>
    
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: 'side-bar-tab-icon.svg'
    },
    text: {
      type: String,
      required: true,
      default: 'placeholder'
    },
    text_color: {
      type: String,
      required: true,
      default: 'text-white'
    },
    badge: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    alt_Text() {
        return this.text + ' icon';
    },
    computed_text_color() {
        return "text-capitalize " + this.text_color;
    }
  }
}
</script>