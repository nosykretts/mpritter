<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link :to="{name: 'signin'}">Signin</router-link>
        <router-link :to="{name: 'signup'}">Signup</router-link>

      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
