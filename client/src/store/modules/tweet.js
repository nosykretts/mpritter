import axios from 'axios'

const state = {
  tweets: []
}

const getters = {
  tweets: state =>
    state.tweets.map(tweet => {
      let loggedId = localStorage.getItem('userId') || '0'
      if (tweet.creator._id === loggedId) {
        return {
          ...tweet,
          canDelete: true
        }
      }
      return tweet
    })
}

const actions = {
  getTweets ({ commit }, tag) {
    console.log(tag)
    axios
      .get(`/tweets${tag ? '?hastag=' + tag : ''}`)
      .then(({ data }) => {
        commit('getTweetSuccess', {
          tweets: data.data
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  createTweet ({ commit }, { content }) {
    axios
      .post('/tweets', {
        content
      })
      .then(({ data }) => {
        commit('createTweetSuccess', {
          tweet: data.data
        })
      })
  },
  deleteTweet ({ commit }, id) {
    axios.delete('/tweets/' + id).then(({ data }) => {
      commit('deleteTweetSuccess', { id })
    })
  }
}

const mutations = {
  getTweetSuccess (state, { tweets }) {
    state.tweets = tweets
  },
  createTweetSuccess (state, { tweet }) {
    state.tweets = [
      {...tweet, canDelete : true},
      ...state.tweets
    ]
  },
  deleteTweetSuccess (state, { id }) {
    state.tweets = state.tweets.filter(tweet => tweet._id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
