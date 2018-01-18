<template>
  <el-card class="box-card">
    
    <p><img :src="'https://ui-avatars.com/api/?name='+ tweet.creator.username"></p>
    <p><strong>{{tweet.creator.username}}</strong></p>
    <p>{{tweet.content}}</p>
    <el-button v-for="tag in tweet.tags" :key="tag" @click="getTweets(tag)">#{{tag}}</el-button>
    <br>
    <hr>
    <el-button v-if="tweet.canDelete" size="small" @click="deleteTweet(tweet._id)">Delete</el-button>
  </el-card>
</template>
<script>
import { mapActions } from 'vuex'
export default {

  props: ['tweet'],
  methods: {
    ...mapActions(['deleteTweet', 'getTweets'])
  }
}
</script>

<style>
.box-card {
  margin-bottom: 10px;
}
</style>
