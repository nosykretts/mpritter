<template>
 <div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="Post new Tweet"
      v-model="content">
    </el-input>
    <el-button style="margin-top:10px; float: right" type="primary" @click="postTweet">Tweet</el-button>
    <hr>
 </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    postTweet () {
      this.$store.dispatch('createTweet', {
        content: this.content
      })
      this.content = ''
    }
  }
}
</script>

<style>

</style>
