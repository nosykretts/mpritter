<template>
    <div>
      <h1>sign in</h1>
      <el-input placeholder="email" v-model="email"></el-input>
      <el-input placeholder="password" type="password" v-model="password"></el-input>
      <el-button @click="signup">Submit</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    signin(){
      this.$store.dispatch('')
    }
  }
}
</script>

<style>

</style>
