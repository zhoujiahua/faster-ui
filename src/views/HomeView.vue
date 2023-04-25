<template>
  <div class="home">
    <test-dict title="Hello" content="Welcome to my app"/>
  </div>
</template>

<script>

import { getUserInfo } from '@/api/users'

export default {
  name: 'HomeView',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        this.userInfo = await getUserInfo()
        console.log(this.userInfo)
      } catch (e) {
        console.error(e.message)
        throw new Error(e.message)
      }
    }
  }
}

</script>
