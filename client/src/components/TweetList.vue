<template>
  <el-row>
    <el-col :span="24">
      <TweetCard v-for="tweet in tweets" :key="tweet._id"/>
    </el-col>
  </el-row>
</template>

<script>
import TweetCard from './TweetCard'
export default {
  components: {TweetCard}
}
</script>

<style>

</style>
