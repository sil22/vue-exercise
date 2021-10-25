<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
  header {
    height: 10%;
  }
h1 {
  background-color: #333;
  color: snow;
  padding: 1rem;
  text-align: center;
}
</style>
