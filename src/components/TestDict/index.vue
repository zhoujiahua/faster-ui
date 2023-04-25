<template>
  <div class="test-component">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestDict',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.test-component {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
