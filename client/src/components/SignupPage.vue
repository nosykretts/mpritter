<template>
  <div>
      <el-input placeholder="username" v-model="username"></el-input>
      <el-input placeholder="email" v-model="email"></el-input>
      <el-input placeholder="password" type="password" v-model="password"></el-input>
      <el-button @click="signup">Submit</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    signup () {
      this.$store
        .dispatch('signup', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'homePage' })
        })
    }
  }
}
</script>

<style>

</style>
