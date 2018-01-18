<template>
  <el-card class="box-card">
    
    <h3><img :src="'https://ui-avatars.com/api/?name='+ tweet.creator.username"></h3>
    <h3><strong>{{tweet.creator.username}}</strong></h3>
    <p>{{tweet.content}}</p>
    <hr>
    <el-button type="success" plain size="mini" v-for="tag in tweet.tags" :key="tag" @click="getTweets(tag)">#{{tag}}</el-button>
    <br>
    <hr>
    <el-button plain v-if="tweet.canDelete" size="mini" type="danger" @click="deleteTweet(tweet._id)">Delete</el-button>
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
