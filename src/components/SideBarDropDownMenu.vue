<template>
    <div v-if="icon" class="d-flex mx-3 my-1">
        <img :src="require(`@/assets/icons/${icon}`)" :alt="alt_Text" >
        <div class="">
            <div class="dropdown">
            <button :class="computed_text_color" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ text }}</button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button">Something else here</button></li>
            </ul>
            </div>
        </div>
    </div>

    <div v-else class="d-flex my-1">
        <div class="">
            <div class="dropdown">
            <button :class="computed_text_color" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ text }}</button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button" @click="redirectToLogIn">Log Out</button></li>
            </ul>
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
        return "btn dropdown-toggle text-capitalize " + this.text_color;
    }
  },
  methods: {
    redirectToLogIn() {
      this.$router.push('/');
    }
  }
}
</script>