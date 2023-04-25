<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import { getUserInfo } from '@/api/users'

export default {
  name: 'AboutView',
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
