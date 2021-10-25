<template>
  <div>
    <Header title="$ BINANCE APP $" />
    <Nuxt /> 
    <Footer title="copyright 2020" />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
