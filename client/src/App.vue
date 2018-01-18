<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link v-if="!isLoggedIn" :to="{name: 'signin'}">Signin</router-link>
        <router-link v-if="!isLoggedIn" :to="{name: 'signup'}">Signup</router-link>
        <button v-if="isLoggedIn" type="text" @click="signout">Signout</button>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['signout'])
  }
}
</script>

<style>

</style>
