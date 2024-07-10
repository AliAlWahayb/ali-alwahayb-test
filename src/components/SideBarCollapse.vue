<template>
    <div v-if="icon" class="d-flex mx-3 my-1">
        <div class="">
            <p>
                <img :src="require(`@/assets/icons/${icon}`)" :alt="alt_Text">
                <button :class="computed_text_color" type="button" @click="toggleShow" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    {{ text }} <i :class="{ 'bi bi-caret-up-fill': show, 'bi bi-caret-down-fill': !show }"></i>
                </button>
            </p>
            <div class="collapse d-flex-column mx-5" id="collapseExample">
                <div><button :class="computed_text_color">Action</button></div>
                <div><button :class="computed_text_color">Another</button></div>
                <div><button :class="computed_text_color">Something</button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
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
    },
    computed_text_color() {
        return "btn " + this.text_color;
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
}
</script>