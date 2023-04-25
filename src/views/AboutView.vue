<template>
  <div class="about">
    <ul>
      <li>{{ userInfo.name }}</li>
      <li>{{ userInfo.age }}</li>
      <li>{{ userInfo.avatar }}</li>
      <li>{{ userInfo.email }}</li>
      <li>{{ userInfo.gender }}</li>
      <li>{{ userInfo.id }}</li>
      <li>{{ userInfo.phone }}</li>
    </ul>
  </div>
</template>

<script>

import { getUserInfoById, getUserList } from '@/dexie/db-store'

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
        console.log(await getUserList())
        this.userInfo = await getUserInfoById(1)
      } catch (e) {
        console.error(e.message)
        throw new Error(e.message)
      }
    }
  }
}

</script>
