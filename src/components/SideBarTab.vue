<template>
    <button type="button" class="btn w-100">
        <div class="d-flex mx-3 my-1">
            <img :src="require(`@/assets/icons/${icon}`)" :alt="alt_Text" class=" me-1">
            <div class="pt-2">
                <p :class="text_color">{{ text }}</p>
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
    }
  },
  computed: {
    alt_Text() {
        return this.text + ' icon';
    }
  }
}
</script>