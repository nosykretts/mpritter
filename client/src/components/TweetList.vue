<template>
  <el-row v-if="tweets">
    <el-col :span="12">
      <tweet-input v-if="isLoggedIn"/>
      <br>
      <TweetCard v-for="tweet in tweets" :key="tweet._id" :tweet="tweet"/>
    </el-col>
  </el-row>
</template>

<script>
import TweetCard from './TweetCard'
import TweetInput from './TweetInput'
import { mapGetters, mapActions } from 'vuex'
export default {
  mounted () {
    this.getTweets()
  },
  components: {TweetCard, TweetInput},
  methods: {
    ...mapActions(['getTweets'])
  },
  computed: {
    ...mapGetters(['tweets', 'isLoggedIn'])
  }
}
</script>

<style>

</style>
