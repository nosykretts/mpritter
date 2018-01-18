<template>
  <el-card class="box-card">
    <p><img :src="'https://ui-avatars.com/api/?name='+ tweet.creator.username"></p>
    <p>{{tweet.content}}</p>
  </el-card>
</template>

<script>
export default {
  props: ['tweet']
}
</script>

<style>

</style>
