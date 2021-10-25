<template>
  <div id="footer">
  <footer>
    <h3>
      &copy; Silvina Muñoz - {{ year }}
    </h3>
  </footer>
</div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: #333;
  color: snow;
  padding: 1rem;
  text-align: center;
}
#footer {
   bottom:0;
   width:100%;
   height:10%;   /* Height of the footer */
   background:#6cf;
   margin-top: 1rem;
   }
</style>
