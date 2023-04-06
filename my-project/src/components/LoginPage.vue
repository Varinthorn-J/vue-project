<template>
  <div class="login">
    <form class="login-form" @submit.prevent="submitForm">
      <h2 class="text-center mb-4">Login</h2>

      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>

      <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Submit login data to server
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 50px;
}

.login-form {
  max-width: 500px;
  margin: 0 auto;
}
</style>
