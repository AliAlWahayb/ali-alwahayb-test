<template>
    <div class="row h-100 d-flex justify-content-center align-items-center">
        <div class="w-50">
          <div class="mb-3">
            <h2>Log In</h2>
            <p class="text-muted">Don't have an account? <a href="#" class="text-dark">Sign Up</a></p>
          </div>
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <div class="input-group">
                  <input v-if="showPassword" type="text" class="input form-control border-end-0" v-model="password" />
                  <input v-else type="password" class="input form-control border-end-0" v-model="password">
                  <div class="input-group-append">
                    <button class="btn border border-start-0 rounded-1" type="button" @click="toggleShow" ><i :class="{ 'bi bi-eye-slash float-end': showPassword, 'bi bi-eye float-end': !showPassword }"></i></button>
                  </div>

                </div>

                <div id="passwordHelp" class="form-text d-flex justify-content-end"><a href="#" class="text-muted">Forgot Password?</a></div>
              </div>
              <div class="">
                <div class="d-flex justify-content-center my-3">
                  <button type="submit" class="btn btn-warning w-100" @click="redirectToHome">Log In</button>
                </div>
                <div class="d-flex justify-content-center my-3">
                  <button type="submit" class="btn border  w-100"><img src="../assets/images/google.svg" alt="google logo" class="img-fluid me-2">Log In with Google</button>
                </div>
              </div>
            </form>
          </div>
          <div class="">
            <a href="#" class="text-muted d-flex justify-content-center text-decoration-none"><i class="bi bi-arrow-left me-2"></i>Back to Home Page</a>
          </div>
        </div>

      </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    redirectToHome() {
      this.$router.push('/home');
    }
  }
};
</script>