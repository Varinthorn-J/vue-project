<template>
  <div>
    <h2>Register</h2>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name">
      </div>
      <div>
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="form.surname">
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="form.address">
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="form.phone">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password">
      </div>
      <button type="submit" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        address: '',
        phone: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      // ทำการ Submit ข้อมูลไปยัง Backend หรือเก็บข้อมูลไว้ใน Local Storage ตามต้องการ
      console.log(this.form)
    }
  }
}
</script>
