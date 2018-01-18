<template>
    <div>
      <h1>sign in</h1>
      <el-input placeholder="email" v-model="email"></el-input>
      <el-input placeholder="password" type="password" v-model="password"></el-input>
      <el-button @click="signin">Submit</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      this.$store.dispatch('signin', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({name: 'homePage'})
      })
    }
  }
}
</script>

<style>

</style>
